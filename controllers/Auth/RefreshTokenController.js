const {
    user,
    role,
    position,
    userposition,
    useremail,
    userphone,
    department,
    photo,
    Sequelize
} = require("../../models");
const dotenv = require('dotenv');
dotenv.config();

const { response } = require("express");
const Op = Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
let self = {};
let ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;
let REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY;
let TOKEN_MAX_AGE = process.env.TOKEN_MAX_AGE

self.refreshToken = async(request, response, next) => {
    //console.log("The header", request.headers.authorization);
    const refTokenn = request.headers.authorization;
    // jwt.verify(refTokenn, ACCESS_TOKEN_KEY);
    let decodetoken
    try {
        decodetoken = jwt.verify(refTokenn, ACCESS_TOKEN_KEY)
            // const claims = atob(tokenn.split('.')[1])
            // response.status(200).json(decodetoken)
        userId = decodetoken.id;
        positionId = decodetoken.position_id;
        departmentId = decodetoken.department_id
        

        let usr = await user.findOne({
                include: [{
                        model: userposition,
                        as: "positions"
                    }
                ],
                where: {
                    id: userId
                }
        })


        let pos = await position.findOne({
            where: {
                id: positionId
            }
        })
        dept = await department.findOne({
            where: {
                id: departmentId
            }
        })
        let usEmail = await useremail.findOne({
            where: {
                user_id: userId,
                is_primary: true
            }
        })

        let usPhone = await userphone.findOne({
            where: {
                user_id: userId,
                is_primary: true
            }
        })


        let usPhoto = await photo.findOne({
            where: {
                model_id: usr.id,
                type:"USER"
            }
        })
        replyUser = {
            id: usr.id,
            first_name: usr.first_name,
            middle_name: usr.middle_name,
            last_name: usr.last_name,
            email: usEmail ? usEmail.email:null,
            phone: usPhone ? usPhone.phone:null,
            gender: usr.gender,
            position_id: positionId,
            position_name: pos.name,
            department_id: usPos.department_id,
            avatar: usPhoto.url
        }

        if (!usr) {
            return response.status(401).json({
                message: "Email address doesn't exit"
            })
        }
    
            // console.log("The position id is", positionID)
        payload = {  id: userId, department_id: departmentId, position_id: positionId }
        const access_tokener = jwt.sign(payload, ACCESS_TOKEN_KEY, {
            expiresIn: "100h",
        });

        const refreshtokener = jwt.sign(payload, REFRESH_TOKEN_KEY, {
            expiresIn: "100h"
        })
        await user.update({
                refresh_token: refreshtokener
            }, {
                where: { id: userId },
            })
            .then(result => {
                return response.status(200).json({
                        userData: replyUser,
                        accessToken: access_tokener,
                        refreshToken: refreshtokener
                    })

            }).catch(error => {
                return response.status(500).json({
                    message: error
                })
            })


    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }

}
module.exports = self;