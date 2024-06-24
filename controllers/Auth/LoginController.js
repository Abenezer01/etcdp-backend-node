const {
  ActionState,
  User,
  Position,
  Photo,
  UserEmail,
  UserPosition,
  UserPhone,
} = require("../../models");
const dotenv = require("dotenv");
dotenv.config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Socket } = require("../../utils/WebSocket.js");
const cipherHelper = require("../utils/cipher-helper");

const TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;
const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY;

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

    const usr = await User.findOne({
      where: { id: usEmail.user_id, is_activated: true },
      include: [{ model: UserPosition, as: "positions" }]
    });

    if (!usr) {
      return res.apiError("Email address doesn't exist");
    }

    const [usPos, usPhone] = await Promise.all([
      UserPosition.findOne({ where: { user_id: usEmail.user_id, is_primary: true } }),
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
      user_position_id: usPos.id,
      is_checked: !!action,
      profile_completed: !!profile_pic,
    };

    const auth = bcrypt.compareSync(password, usr.password);

    if (!auth) {

      const errorResponse = {
        _links: {
          previousPage: null,
          nextPage: null
        },
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

    const userPayload = {
      id: usr.id,
      department_id: pos.department_id,
      position_id: pos.id,
      lang: usr.lang
    };

    const accessToken = jwt.sign(userPayload, TOKEN_KEY, { expiresIn: "1000h" });
    const refreshToken = jwt.sign(userPayload, REFRESH_TOKEN_KEY, { expiresIn: "1000h" });

    usr.refresh_token = refreshToken;
    await usr.save();

    Socket.emit("loggedIn", { message: true });
    let data = {user_data: replyUser, access_token: accessToken};

    res.apiSuccess({
      data: data,
      total: 1 // Assuming a single user is being returned
    }, {
      pageSize: 1,
      page: 1
    });
  } catch (error) {
    res.apiError(error);
  }
};

module.exports = { loginUser };
