const {
    user,
    position,
    role,
    department,
    photo,
    Sequelize
} = require("../../models");
const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
let self = {};
let TOKEN_KEY = process.env.ACCESS_TOKEN_KEY
let REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY
self.loginUser = async(request, response) => {
    const { email, password } = request.body
    let id
    let usrPass
    let usrPositionID
    let accessToken
    let refreshToken
    let userData
    let usrRole
    try {
        userData = await user.findOne({
            where: {
                email: email
            },
            include: [{
                    model: position,
                    as: "position"
                },
                {
                    model: photo,
                    as: "photo"
                }
            ],
        })
        if (!userData) {
            return response.status(401).json({
                message: "Email address doesn't exit"
            })
        } else {
            usr = userData
            id = usr.id
            usrPass = usr.password
            usrPositionID = usr.position_id
        }
        //console.log("The position user", userData)
        usrRole = await role.findOne({
            where: {
                id: userData.position.role_id
            }
        })

        ur = { id: usrRole.id, name: usrRole.name }
            //dep = { id: usrDepartment.id, name: usrDepartment.name }
        replyUser = {
                first_name: userData.first_name,
                middle_name: userData.middle_name,
                last_name: userData.last_name,
                email: userData.email,
                phone: userData.phone,
                gender: userData.gender,
                position_id: userData.position_id,
                role: ur.name,
                avatar: userData.photo.avatar
            }
            //console.log("Authenticated user role is", usrDepartment.dataValues)


        bcrypt.compare(password, usrPass, function(err, result) {  
            if (result) { 
                usr = { id: id }
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