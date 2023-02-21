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
        let usEmail = await useremail.findOne({
            where:{
                email: email,
                is_primary: true
            }
        })

        if(!usEmail){
            return response.status(404).json({
                message: "User not found!"
            })
        }

        let usPos = await userposition.findOne({
            where:{
                user_id: usEmail.user_id,
                is_primary: true
            }
        })
        if(!usEmail){
            return response.status(404).json({
                message: "User has no primary position!"
            })
        }

        let usPhone = await userphone.findOne({
            where:{
                user_id: usEmail.user_id,
                is_primary: true
            }
        })
        userData = await user.findOne({
            where: {
                id: usEmail.user_id
            },
            include: [{
                    model: userposition,
                    as: "positions"
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
            usrPositionID = usPos.position_id
        }
        //console.log("The position user", userData)

        let pos = await position.findOne({
            where: {
                id: usPos.position_id
            }
        })
        usrRole = await role.findOne({
            where: {
                id: pos.role_id
            }
        })
        console.log("The user role is", usrRole)
        ur = { id: usrRole.id, name: usrRole.name }
            //dep = { id: usrDepartment.id, name: usrDepartment.name }

        replyUser = {
                first_name: userData.first_name,
                middle_name: userData.middle_name,
                last_name: userData.last_name,
                email: usEmail.email,
                phone: usPhone? null:usPhone.phone,
                gender: userData.gender,
                position_id: usPos.position_id,
                role: ur.name,
                avatar: userData.photo.avatar
            }
            //console.log("Authenticated user role is", usrDepartment.dataValues)


        bcrypt.compare(password, usrPass, function(err, result) {  
            if (result) { 
                usr = { id: id, department_id: pos.department_id }

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