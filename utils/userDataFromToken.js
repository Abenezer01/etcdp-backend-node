const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
let ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;

const userData = async (req) => {
  try {

  const tokenString = req.headers.authorization;

  if (!tokenString) {
    return { error: "Authorization token is missing" };
  }

  const [, userToken] = tokenString.split(" ");
  if(!userToken){
    return {error: "Token not Found"};
  }

  let decodetoken;
  decodetoken = jwt.verify(userToken, ACCESS_TOKEN_KEY);
  let usrID = decodetoken.id;
  let departmentID = decodetoken.department_id;
  let position_id = decodetoken.position_id;
  let lang = decodetoken.lang;
  let stakeholder_id = decodetoken.stakeholder_id;
  return { usrID, departmentID, position_id, lang, stakeholder_id };
} catch (error) {
  return error;
}
};
module.exports = {
  userData,
};


