const {
    user,
    Sequelize
} = require("../../models");

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
let self = {};
let TOKEN_KEY = "Secret"
let REFRESH_TOKEN_KEY = "Refreshsecret"
self.loginUser = async(request, response) => {
    const { email, password } = request.body
    let id
    let usrPass
    let usrPositionID
    let accessToken
    let refreshToken
    let userr
    userr = await user.findOne({
        where: {
            email: email
        }
    })
    if (!userr) {
        return response.status(401).json({
            message: "Email address doesn't exit"
        })
    } else {
        usr = userr
        id = usr.id
        usrPass = usr.password
        usrPositionID = usr.position_id
    }

    bcrypt.compare(password, usrPass, function(err, result) {  
        if (result) { 
            usr = { user_id: id, email, user_positionID: usrPositionID }
            accessToken = jwt.sign(usr,
                TOKEN_KEY, {
                    expiresIn: "2h",
                }
            );
            refreshToken = jwt.sign(usr, REFRESH_TOKEN_KEY, { expiresIn: "3h" })
                // save user token

            user.update({
                    refresh_token: refreshToken
                }, {
                    where: { id: id },
                })
                .then(result => {

                    console.log('success', result);
                    response.cookie('accessToken', accessToken);
                    response.cookie('refreshToken', refreshToken);
                    return response.status(200).json({
                            accessToken: accessToken,
                            refreshToken: refreshToken
                        })
                        // return result;
                }).catch(error => {
                    return response.status(500).json({
                        message: error
                    })
                })



        } else {
            return response.status(401).json({
                message: "The password is incorrect"
            })
        }
    })




}


module.exports = self;