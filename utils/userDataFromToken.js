const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
let ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;
const userData = async (req, res, next) => {
  // try {

  const userTokenn = req.headers.authorization;
  let decodetoken;
  decodetoken = jwt.verify(userTokenn, ACCESS_TOKEN_KEY);
  usrID = decodetoken.id;
  departmentID = decodetoken.department_id;
  position_id = decodetoken.position_id;
  lang = decodetoken.lang;

  console.log("This is user id", usrID);
  return { usrID, departmentID, position_id, lang };

  // } catch (error) {
  //     //console.log("Here is the error", error)
  //     return res.status(500).json({
  //         message: error.message
  //     })

  // }
};
module.exports = {
  userData,
};
