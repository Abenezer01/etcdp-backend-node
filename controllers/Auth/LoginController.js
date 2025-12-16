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
    };

    const auth = bcrypt.compareSync(password, usr.password);

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

    // --- TOKEN GENERATION LOGIC ---

    const userPayload = {
      id: usr.id,
      department_id: pos.department_id,
      position_id: pos.id,
      lang: usr.lang,
      stakeholder_id: usr.stakeholder_id
    };

    // 1. ACCESS TOKEN: Short-lived, signed JWT for API access
    const accessToken = jwt.sign(userPayload, ACCESS_TOKEN_KEY, { expiresIn: "20m" }); 
    
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