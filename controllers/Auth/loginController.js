const {
    user,
    position,
    role,
    department,
    photo,
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
    let usrRole
    userr = await user.findOne({
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
                email: email
            }
        })
        //console.log("The position user", userr)
    usrRole = await role.findOne({
        where: {
            id: userr.position.role_id
        }
    })
    usrDepartment = await department.findOne({
        where: {
            id: userr.position.department_id
        }
    })

    ur = { id: usrRole.id, name: usrRole.name }
    dep = { id: usrDepartment.id, name: usrDepartment.name }
    replyUser = {
            first_name: userr.first_name,
            middle_name: userr.middle_name,
            last_name: userr.last_name,
            email: userr.email,
            phone: userr.phone,
            gender: userr.gender,
            position_id: userr.position_id,
            role_name: ur.name,
            avatar: userr.photo.avatar
        }
        //console.log("Authenticated user role is", usrDepartment.dataValues)
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

                    //console.log('success', result);
                    response.cookie('accessToken', accessToken);
                    response.cookie('refreshToken', refreshToken);
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


module.exports = self;