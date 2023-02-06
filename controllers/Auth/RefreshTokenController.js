const {
    user,
    role,
    position,
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

self.refreshToken = async(request, response, next) => {
    //console.log("The header", request.headers.authorization);
    const refTokenn = request.headers.authorization;
    // jwt.verify(refTokenn, ACCESS_TOKEN_KEY);
    let decodetoken
    try {
        decodetoken = jwt.verify(refTokenn, ACCESS_TOKEN_KEY)
            // const claims = atob(tokenn.split('.')[1])
            // response.status(200).json(decodetoken)

        usrID = decodetoken.id;
        positionID = decodetoken.position_id;
        //console.log("Ref user: ", decodetoken.id)
        let usr
        usr = await user.findOne({
                include: [{
                        model: position,
                        as: "position"
                    },
                    {
                        model: photo,
                        as: "photo"
                    }
                ],
                where: {
                    id: decodetoken.id
                }
            })
            // console.log("Ref user: ", usr)
            // return response.status(200).json({

        //     message: usr
        // })
        usrRole = await role.findOne({
            where: {
                id: usr.position.role_id
            }
        });
        usrDepartment = await department.findOne({
            where: {
                id: usr.position.department_id
            }
        })

        ur = { id: usrRole.id, name: usrRole.name }
        dep = { id: usrDepartment.id, name: usrDepartment.name }
        replyUser = {
            first_name: usr.first_name,
            middle_name: usr.middle_name,
            last_name: usr.last_name,
            email: usr.email,
            phone: usr.phone,
            gender: usr.gender,
            position_id: usr.position_id,
            role: ur.name,
            avatar: usr.photo.avatar
        }
        if (!usr) {
            return response.status(401).json({
                message: "Email address doesn't exit"
            })
        }
        usrID = usr.id;
        email = usr.email;
        usrRole = await role.findOne({
            where: {
                id: usr.position.role_id
            }
        });
        usrDepartment = await department.findOne({
            where: {
                id: usr.position.department_id
            }
        });
        ur = { id: usrRole.id, name: usrRole.name }
        dep = { id: usrDepartment.id, name: usrDepartment.name }
            // console.log("The position id is", positionID)
        usrr = { id: usrID }
        const access_tokener = jwt.sign(usrr, ACCESS_TOKEN_KEY, {
            expiresIn: "2h",
        });

        const refreshtokener = jwt.sign(usrr, REFRESH_TOKEN_KEY, {
            expiresIn: "3h"
        })
        await user.update({
                refresh_token: refreshtokener
            }, {
                where: { id: usrID },
            })
            .then(result => {


                //console.log('success', result);
                // response.cookie('accessToken', access_tokener);
                // response.cookie('refreshToken', refreshtokener);
                return response.status(200).json({
                        userData: replyUser,
                        accessToken: access_tokener,
                        refreshToken: refreshtokener
                    })
                    // return result;


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