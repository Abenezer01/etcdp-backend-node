const {
    actionstate,
    user,
    position,
    role,
    department,
    photo,
    useremail,
    userposition,
    userphone,
    Sequelize
} = require("../../models");
const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const { Socket } = require("../../utils/WebSocket.js")
const { encrypt, decrypt } = require('../../utils/helper')

let self = {};
let TOKEN_KEY = process.env.ACCESS_TOKEN_KEY
let REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY
let TOKEN_MAX_AGE = process.env.TOKEN_MAX_AGE

self.loginUser = async(request, response) => {

    const { email, password } = request.body;

    try {
        
        const usEmail = await useremail.findOne({
            where: {
                email: await encrypt(email),
                is_primary: true
            }
        });

        
        if (!usEmail) {
            return response.status(404).json({
                message: "User not found!"
            });
        }

        const [usPos, usPhone, usr] = await Promise.all([
            userposition.findOne({
                where: {
                    user_id: usEmail.user_id,
                    is_primary: true
                }
            }),
            userphone.findOne({
                where: {
                    user_id: usEmail.user_id,
                    is_primary: true
                }
            }),
            user.findOne({
                where: {
                    id: usEmail.user_id
                },
                include: [{
                    model: userposition,
                    as: "positions"
                }],
            })
        ]);

        if (!usPos) {
            return response.status(404).json({
                message: "User has no primary position!"
            });
        }

        if (!usr) {
            return response.status(401).json({
                message: "Email address doesn't exit"
            });
        }

        const pos = await position.findOne({
            where: {
                id: usPos.position_id
            }
        })

        //show if it is checked

        let action = await actionstate.findOne({
            where: {
                model_id: usr.id,
                action: "CHECK"
            }
        })
        let profile_pic = await photo.findOne({
            where: {
                model_id: usr.id,
                type: "USER_PROFILE_PHOTO"
            }
        })
        
        let first_name = await decrypt(usr.first_name)
        let middle_name = await decrypt(usr.middle_name)
        let last_name = await decrypt(usr.last_name)

        let full_name = first_name + " " + middle_name

        
        let replyUser = {
            id: usr.id,
            full_name: full_name,
            first_name: last_name,
            middle_name: middle_name,
            last_name: last_name,
            phone: usPhone.phone,
            gender: usr.gender,
            position_id: pos.id,
            position_name: pos.name,
            department_id: usPos.department_id,
            user_position_id: usPos.id,
            is_checked: action ? true:false,
            profile_completed: profile_pic ? true:false
        }


        bcrypt.compare(password, usr.password, function(err, result) {  
            if (result) { 
                usrr = { id: usr.id, department_id: pos.department_id, position_id: pos.id }
                accessToken = jwt.sign(usrr,
                    TOKEN_KEY, {
                        expiresIn: "100h",
                    }
                );
                refreshToken = jwt.sign(usrr, REFRESH_TOKEN_KEY, { expiresIn: "100h" })
                    // save user token  
                    //let replyUser = {first_name:usr.first_name,last_name:usr_last_name,}
                user.update({
                        refresh_token: refreshToken
                    }, {
                        where: { id: usr.id },
                    })
                    .then(result => {
                        // //send status
                        Socket.emit("loggedIn", {
                            message: true
                        });
                        return response.status(200).json({
                                userData: replyUser,
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
    } catch (error) {
        console.log("The error is", error)

        return response.status(401).json({
            message: error == "TypeError: Cannot read properties of null (reading 'position')" ? "Unauthorized! please check your email and password" : error.message
        })
    }

}


module.exports = self;