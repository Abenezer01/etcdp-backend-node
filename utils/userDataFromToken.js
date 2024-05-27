const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
let ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;
const userData = async (req, res, next) => {
  // try {

  const userTokenn = req.headers.authorization;
  // if (!userTokenn) {
  //   return res.status(401).json({ error: "Authorization token is missing" });
  // }
  // const [, userTokenn] = tokenString.split(' ');
  let decodetoken;
  decodetoken = jwt.verify(userTokenn, ACCESS_TOKEN_KEY);
  usrID = decodetoken.id;
  departmentID = decodetoken.department_id;
  position_id = decodetoken.position_id;
  lang = decodetoken.lang;

  console.log("This is user id", usrID);
  return { usrID, departmentID, position_id, lang };
};
module.exports = {
  userData,
};


