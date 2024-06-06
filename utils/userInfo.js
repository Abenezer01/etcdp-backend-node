const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

let ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;

const userInfo = async (req, res, next) => {
  try {
    const tokenString = req.headers.authorization;

    if (!tokenString) {
      return "TOKEN_MISSING"
    }

    const tokenParts = tokenString.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {

        return "INVALID_HEADER_FORMAT"
     
    }

    const userToken = tokenParts[1];
    if (!userToken) {
        return "TOKEN_NOT_FOUND"
    }

    const decodedToken = jwt.verify(userToken, ACCESS_TOKEN_KEY);

    req.user = {
      usrID: decodedToken.id,
      departmentID: decodedToken.department_id,
      position_id: decodedToken.position_id,
      lang: decodedToken.lang
    };

    return req.user;

    next();
  } catch (error) {
    return "INVALID_EXPIRED_TOKEN"
  }
};

module.exports = {
  userInfo,
};
