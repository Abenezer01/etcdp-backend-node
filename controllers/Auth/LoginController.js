const {
  ActionState,
  User,
  Position,
  Role,
  Department,
  Photo,
  UserEmail,
  UserPosition,
  UserPhone,
  Sequelize

} = require("../../models");
const dotenv = require("dotenv");
dotenv.config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Socket } = require("../../utils/WebSocket.js");

const cipherHelper = require("../utils/cipher-helper");

const { refreshToken } = require("./RefreshTokenController");

let self = {};
let TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;
let REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY;
let TOKEN_MAX_AGE = process.env.TOKEN_MAX_AGE;

self.loginUser = async (request, res) => {
  const { email, password } = request.body;

  try {
    const usEmail = await UserEmail.findOne({
      where: {
        email: cipherHelper.encrypt(email),
        is_primary: true,
      },
    });


    if (!usEmail) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    let usr = await User.findOne({
      where: {
        id: usEmail.user_id,
        is_activated: true
      },
      include: [
        {
          model: UserPosition,
          as: "positions",
        },
      ],
    });

    const [usPos, usPhone] = await Promise.all([
      UserPosition.findOne({
        where: {
          user_id: usEmail.user_id,
          is_primary: true,
        },
      }),
      UserPhone.findOne({
        where: {
          user_id: usEmail.user_id,
          is_primary: true,
        },
      }),
    ]);

    if (!usPos) {
      return res.status(404).json({
        message: "User has no primary position!",
      });
    }

    if (!usr) {
      return res.status(401).json({
        message: "Email address doesn't exit",
      });
    }

    const pos = await Position.findOne({
      where: {
        id: usPos.position_id,
      },
    });

    //show if it is checked

    let action = await ActionState.findOne({
      where: {
        model_id: usr.id,
        action: "CHECK",
      },
    });
    let profile_pic = await Photo.findOne({
      where: {
        model_id: usr.id,
        type: "USER_PROFILE_PHOTO",
      },
    });

    let replyUser = {
      id: usr.id,
      full_name: usr.full_name,
      first_name: usr.first_name,
      middle_name: usr.middle_name,
      last_name: usr.last_name,
      phone: usPhone.phone,
      gender: usr.gender,
      position_id: pos.id,
      position_name: pos.name,
      department_id: usPos.department_id,
      user_position_id: usPos.id,
      is_checked: action ? true : false,
      profile_completed: true,
      // profile_completed: profile_pic ? true : false,
    };

    const auth = await bcrypt.compareSync(password, usr.password);

    if (auth) {
      usrr = {
        id: usr.id,
        department_id: pos.department_id,
        position_id: pos.id,
        lang: usr.lang,
      };

      const accessToken = jwt.sign(usrr, TOKEN_KEY, {
        expiresIn: "1000h",
      });

      const refreshToken = jwt.sign(usrr, REFRESH_TOKEN_KEY, {
        expiresIn: "1000h",
      });

      User
        .findByPk(usr.id)
        .then((u) => {
          u.refresh_token = refreshToken;
          return u.save(); // persist the changes to the database
        })
        .then((updatedUser) => {
          Socket.emit("loggedIn", {
            message: true,
          });

          return res.status(200).json({
            userData: replyUser,
            accessToken: accessToken,
            refreshToken: refreshToken,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      return res.status(401).json({
        message: "You are not Authorized",
      });
    }
  } catch (error) {
    console.log("The error is", error);

    return res.status(401).json({
      message:
        error ==
        "TypeError: Cannot read properties of null (reading 'position')"
          ? "Unauthorized! please check your email and password"
          : error.message,
    });
  }
};

module.exports = self;
