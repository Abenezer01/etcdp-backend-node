const {
  ActionState,
  User,
  Position,
  Photo,
  UserEmail,
  UserPosition,
  UserPhone,
  // Add the RefreshToken model here if needed for direct access
  // but we primarily use the helper function now.
} = require("../../models");

const dotenv = require("dotenv");
dotenv.config();
const { rateLimit } = require('express-rate-limit');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Import the new utility function for creating the secure, database-managed Refresh Token
// const { createRefreshToken } = require("../../utils/token-helper.js"); 

const { createRefreshToken } = require("../utils/token-helper.js");
const { Socket } = require("../../utils/WebSocket.js");
const cipherHelper = require("../utils/cipher-helper");

// Ensure these keys are strong, unique, and stored in your environment variables
const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;
const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY; 
// NOTE: REFRESH_TOKEN_KEY is not strictly needed if using the opaque token approach, 
// but is kept here if you want to sign the access token and refresh token differently.

/**
 * 1. IP-BASED RATE LIMITER (Middleware)
 * Prevents a single IP from hammering the login endpoint.
 */
const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 login requests per window
  message: {
    _errors: { message: ["Too many login attempts from this IP. Please try again after 15 minutes."] }
  },
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * 2. ACCOUNT LOCKOUT LOGIC (Internal Helper)
 */

  const LOCKOUT_LIMIT = 5;
  const LOCKOUT_DURATION_MINS = 15;
  const checkAccountLockout = async (userId) => {
  const user = await User.findOne({
      where: {
          id: userId,
      }
});
  if (user.locked_until && user.locked_until > new Date()) {
    const remaining = Math.ceil((user.locked_until - new Date()) / 60000);
    throw new Error(`Account locked. Please try again in ${remaining} minutes.`);
  } 
  return user;
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const encryptedEmail = cipherHelper.encrypt(email);

    const usEmail = await UserEmail.findOne({
      where: { email: encryptedEmail, is_primary: true }
    });

    if (!usEmail) {
      return res.apiError("User not found!");
    }

    // Optimized user lookup (consider adding more eager loading here for performance)
    const usr = await User.findOne({
      where: { id: usEmail.user_id, is_activated: true },
      include: [{ model: UserPosition, as: "positions" }]
    });

    if (!usr) {
      // This error message may be confusing if the user was found in UserEmail
      return res.apiError("User account not activated or does not exist."); 
    }

    // 1. CHECK IF ACCOUNT IS LOCKED
    if (usr.locked_until && usr.locked_until > new Date()) {
      const remainingTime = Math.ceil((usr.locked_until - new Date()) / 60000);
      const errorResponse = {
        _links: { previousPage: null, nextPage: null },
        _warning: [],
        payload: [],
        _attributes: {},
        _errors: {
          message: [`Account is temporarily locked. Try again in ${remainingTime} minutes`]
        },
        _generated: new Date().toISOString()
      };
      return res.status(401).json(errorResponse);

    }
    const [usPos, usPhone] = await Promise.all([
      UserPosition.findOne({ where: { user_id: usEmail.user_id } }),
      UserPhone.findOne({ where: { user_id: usEmail.user_id, is_primary: true } })
    ]);

    if (!usPos) {
      return res.apiError("User has no primary position!");
    }

    const pos = await Position.findOne({ where: { id: usPos.position_id } });

    const action = await ActionState.findOne({ where: { model_id: usr.id, action: "CHECK" } });
    const profile_pic = await Photo.findOne({ where: { model_id: usr.id, type: "USER_PROFILE_PHOTO" } });

    const replyUser = {
      id: usr.id,
      full_name: usr.full_name,
      name: usr.name,
      first_name: usr.first_name,
      middle_name: usr.middle_name,
      last_name: usr.last_name,
      phone: usPhone?.phone,
      gender: usr.gender,
      position_id: pos.id,
      position_name: pos.name,
      department_id: usPos.department_id,
      stakeholder_id: usr.stakeholder_id,
      user_position_id: usPos.id,
      is_checked: !!action,
      profile_completed: !!profile_pic,
      failed_login_attempts: usr.failed_login_attempts,
      locked_until: usr.locked_until,
    };

    const auth = bcrypt.compareSync(password, usr.password);

    if (!auth) {
      // 2. TRACK FAILED ATTEMPT
      const newFailCount = (usr.failed_login_attempts || 0) + 1;
      let updateData = { failed_login_attempts: newFailCount };

      // 3. APPLY LOCKOUT AFTER 5 FAILURES
      if (newFailCount >= 5) {
        updateData.locked_until = new Date(Date.now() + 15 * 60 * 1000); // Lock for 15 mins
        updateData.failed_login_attempts = 0; // Reset counter for next cycle
      }

      await usr.update(updateData);

      const errorResponse = {
        _links: { previousPage: null, nextPage: null },
        _warning: [],
        payload: [],
        _attributes: {},
        _errors: {
          message: ["Invalid email or password. Remaining attempts: " +Math.max(0, 5 - newFailCount)]
        },
        _generated: new Date().toISOString()
      };
      return res.status(401).json(errorResponse);
    }

    if (!auth) {
      const errorResponse = {
        _links: { previousPage: null, nextPage: null },
        _warning: [],
        payload: [],
        _attributes: {},
        _errors: {
          message: ["You are not authorized"]
        },
        _generated: new Date().toISOString()
      };
      return res.status(401).json(errorResponse);
    }

    // 4. SUCCESS: RESET LOCKOUT ATTRIBUTES
    await usr.update({ 
      failed_login_attempts: 0, 
      locked_until: null 
    });

    // --- TOKEN GENERATION LOGIC ---

    const userPayload = {
      id: usr.id,
      department_id: pos.department_id,
      position_id: pos.id,
      lang: usr.lang,
      stakeholder_id: usr.stakeholder_id
    };

    // 1. ACCESS TOKEN: Short-lived, signed JWT for API access
    const accessToken = jwt.sign(userPayload, ACCESS_TOKEN_KEY, { expiresIn: "15m" }); 
    
    // 2. REFRESH TOKEN: Long-lived, random string stored in the database
    // This is the CRITICAL change for security and proper expiration management.
    const refreshToken = await createRefreshToken(usr.id); 


    // Socket notification
    Socket.emitToUser("loggedIn", { message: true }, usr.id);

    // Send both tokens back to the client
    let data = {
      user_data: replyUser, 
      access_token: accessToken,
      refresh_token: refreshToken, // Send the random string refresh token
    };

    res.apiSuccess({
      data: data
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.apiError(error);
  }
};

module.exports = { loginUser };