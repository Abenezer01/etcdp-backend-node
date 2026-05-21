const {
  ActionState,
  User,
  Position,
  UserPosition,
  UserEmail,
  UserPhone,
  Photo,
  RefreshToken // 🚨 Ensure your RefreshToken database model is imported here
} = require("../../models");
const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");
let self = {};
let ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;

self.refreshToken = async (request, response, next) => {
  // Read token from Authorization header (Expected format: "Bearer <TOKEN>" or just "<TOKEN>")
  let refTokenn = request.headers.authorization;
  if (refTokenn && refTokenn.startsWith("Bearer ")) {
    refTokenn = refTokenn.split(" ")[1];
  }

  if (!refTokenn) {
    return response.status(401).json({ message: "Refresh token is missing" });
  }

  try {
    // 🚨 FIX: Instead of jwt.verify, query the database for this opaque random string
    const dbToken = await RefreshToken.findOne({
      where: { token: refTokenn }
    });

    // 🚨 FIX: Check if the token doesn't exist or if its database timestamp has run out
    if (!dbToken || new Date(dbToken.expiry_date) < new Date()) {
      return response.status(401).json({ 
        message: "Your session has expired. Please login again.",
        errorCode: "REFRESH_TOKEN_EXPIRED"
      });
    }

    let userId = dbToken.user_id;

    // Fetch user details along with their status checking properties
    let usr = await User.findOne({
      include: [
        {
          model: UserPosition,
          as: "positions",
        },
      ],
      where: {
        id: userId,
        is_activated: true
      },
    });

    if (!usr) {
      return response.status(401).json({
        message: "User account does not exist or is deactivated",
      });
    }

    // Safely extract the position data from the user's primary association payload if available
    let positionId = usr.positions?.[0]?.position_id || null;
    let departmentId = usr.positions?.[0]?.department_id || null;

    // Run secondary user profile queries concurrently to optimize execution time
    const [pos, usEmail, usPhone, usPhoto, action, profile_pic] = await Promise.all([
      positionId ? Position.findOne({ where: { id: positionId } }) : null,
      UserEmail.findOne({ where: { user_id: userId, is_primary: true } }),
      UserPhone.findOne({ where: { user_id: userId, is_primary: true } }),
      Photo.findOne({ where: { model_id: usr.id, type: "USER" } }),
      ActionState.findOne({ where: { model_id: usr.id, action: "CHECKE" } }),
      Photo.findOne({ where: { model_id: usr.id, type: "USER_PROFILE_PHOTO" } })
    ]);

    let replyUser = {
      id: usr.id,
      full_name: usr.full_name,
      first_name: usr.first_name,
      middle_name: usr.middle_name,
      last_name: usr.last_name,
      email: usEmail ? usEmail.email : null,
      phone: usPhone ? usPhone.phone : null,
      gender: usr.gender,
      position_id: positionId,
      position_name: pos ? pos.name : null,
      department_id: pos ? pos.department_id : departmentId,
      stakeholder_id: usr.stakeholder_id,
      user_position_id: usr.positions?.[0]?.id || null,
      avatar: usPhoto ? usPhoto.url : null,
      is_checked: !!action,
      profile_completed: !!profile_pic,
    };

    // Construct a clean authorization context token payload
    let payload = {
      id: userId,
      department_id: replyUser.department_id,
      position_id: positionId,
      lang: usr.lang,
      stakeholder_id: usr.stakeholder_id
    };

    // 🚨 ACCESS TOKEN SLIDING LEASE: Set to 15 minutes.
    // If the user remains active, the frontend interceptor hits this endpoint, 
    // extending their login status smoothly without interruption.
    const access_tokener = jwt.sign(payload, ACCESS_TOKEN_KEY, {
      expiresIn: "15m", 
    });

    // Return the fresh access token along with the same valid refresh token back to the user
    return response.status(200).json({
      userData: replyUser,
      accessToken: access_tokener,
      refreshToken: refTokenn, // Reuse the same secure opaque token from storage
    });

  } catch (error) {
    console.error("Token Refresh Middleware Exception:", error);

    return response.status(500).json({
      message: error.message || "Internal server error during session processing.",
    });
  }
};

module.exports = self;