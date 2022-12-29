const {
    user,
    Sequelize
} = require("../../models");
const { response } = require("express");
const Op = Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
let self = {};
let ACCESS_TOKEN_KEY = "Secret";
let REFRESH_TOKEN_KEY = "Refreshsecret";

self.refreshToken = async(request, response) => {
    const refTokenn = request.cookies.refreshToken
    decoded = jwt.verify(refTokenn, REFRESH_TOKEN_KEY);
    // const claims = atob(tokenn.split('.')[1])
    // response.status(200).json(decoded)
    usrID = decoded.user_id
    positionID = decoded.user_positionID
    let usr
    usr = await user.findOne({
            where: {
                email: decoded.email
            }
        })
        // return response.status(200).json({

    //     message: usr
    // })
    if (!usr) {
        return response.status(401).json({
            message: "Email address doesn't exit"
        })
    }
    usrID = usr.id
    email = usr.email
        // console.log("The position id is", positionID)
    usrr = { user_id: usrID, email: email, user_positionID: positionID }
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


            console.log('success', result);
            response.cookie('accessToken', access_tokener);
            response.cookie('refreshToken', refreshtokener);
            return response.status(200).json({
                    accessToken: access_tokener,
                    refreshToken: refreshtokener
                })
                // return result;


        }).catch(error => {
            return response.status(500).json({
                message: error
            })
        })


}
module.exports = self;