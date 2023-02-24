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
    const { email, password } = request.body
    let accessToken
    let refreshToken
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
        }else{
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
            let usr = await user.findOne({
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
            if (!usr) {
                return response.status(401).json({
                    message: "Email address doesn't exit"
                })
            } else {
                
    
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
    
            ur = { id: usrRole.id, name: usrRole.name }
    
            replyUser = {
                id: usr.id,
                first_name: usr.first_name,
                middle_name: usr.middle_name,
                last_name: usr.last_name,
                email: usEmail.email,
                phone: usPhone? null:usPhone.phone,
                gender: usr.gender,
                position_id: usPos.position_id,
                position_name: pos.name,
                role: usrRole.name,
                avatar: usr.photo.avatar
            }
    
    
            bcrypt.compare(password, usr.password, function(err, result) {  
                if (result) { 
                    payload = { id: id, department_id: pos.department_id, position_id: pos.id}
    
                    accessToken = jwt.sign(payload,
                        TOKEN_KEY, {
                            expiresIn: TOKEN_MAX_AGE,
                        }
                    );
                    // refreshToken = jwt.sign(payload, REFRESH_TOKEN_KEY, { expiresIn: "3h" })
                    refreshToken = jwt.sign(payload, REFRESH_TOKEN_KEY, { expiresIn: TOKEN_MAX_AGE })
                    
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
        }

        
    } catch (error) {
        console.log("The error is", error)

        return response.status(401).json({
            message: error == "TypeError: Cannot read properties of null (reading 'position')" ? "Unauthorized! please check your email and password" : error.message
        })
    }




}


module.exports = self;