const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
let ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;
const userData = async (req, res, next) => {
  try {

  const tokenString = req.headers.authorization;

  if (!tokenString) {
    return { error: "Authorization token is missing" };
  }

  const [, userToken] = tokenString.split(' ');
  if(!userToken){
    return {error: "Token not Found"}
  }

  let decodetoken;
  decodetoken = jwt.verify(userToken, ACCESS_TOKEN_KEY);
  usrID = decodetoken.id;
  departmentID = decodetoken.department_id;
  position_id = decodetoken.position_id;
  lang = decodetoken.lang;

  console.log("This is user id", usrID);
  return { usrID, departmentID, position_id, lang };
} catch (error) {
  return error;
}
};
module.exports = {
  userData,
};


