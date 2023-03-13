const {
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
let self = {};
let TOKEN_KEY = process.env.ACCESS_TOKEN_KEY
let REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY
let TOKEN_MAX_AGE = process.env.TOKEN_MAX_AGE

self.loginUser = async(request, response) => {

    const { email, password } = request.body;

    try {
        const usEmail = await useremail.findOne({
            where: {
                email: email,
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

        // const usrRole = await role.findOne({
        //     where: {
        //         id: pos.role_id
        //     }
        // })
        // return response.json(usrRole)

        const usrPhoto = await photo.findOne({
            where: {
                model_id: usr.id,
                type: "USER"
            }
        })
        let replyUser = { id: usr.id, full_name: usr.full_name, first_name: usr.last_name, middle_name: usr.middle_name, phone: usPhone.phone, gender: usr.gender, avatar: usrPhoto.url, position_id: pos.id, position_name: pos.name}


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