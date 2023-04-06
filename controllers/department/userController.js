const {
    user,
    address,
    actionstate,
    position,
    userposition,
    useremail,
    userphone,
    department,
    passwordreset,
    photo,
    role,
    sequelize,
    Sequelize,
} = require("./../../models");
const bcrypt = require("bcrypt");
let validator = require("../../utils/validator");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();
const usrData = require("../../utils/userDataFromToken");
const {
    getChildren,
    encrypt,
    decrypt,
    saveActionState,
} = require("../../utils/helper");

const helper = require("../../utils/helper");

const paginate = require("../../utils/pagination");
const actionHelper = require("../utils/action-helper");
const cipherHelper = require("../utils/cipher-helper");
const jwt = require("jsonwebtoken");

//emailer
const uuid = require("uuid");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const emailValidator = require("deep-email-validator");

let TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;
let REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY;
let TOKEN_MAX_AGE = process.env.TOKEN_MAX_AGE;

let self = {};
self.getAlll = async(req, res) => {
    let userData = await user.findAll();

    console.log("The datas are", userData[0].id);
    let otherArr = [];
    let dd;
    var arr = [];
    //console.log("The other is", other)
    for (let act of userData) {
        dd = await actionstate.findOne({
            where: {
                model_id: act.id,
                action: "REGISTER",
                model: "user",
            },
        });
        if (dd) {
            arr.push(act);
        }
    }
    let { page, size, order } = req.query;
    if (page == null && size == null) {
        (page = process.env.page), (size = process.env.size);
    }
    if (order == null) {
        order = process.env.order;
    }
    const { limit, offset } = paginate.getPagination(Number(page), Number(size));
    let usr = [];
    for (let ar of arr) {
        let ll = await user.findAndCountAll({
            attributes: ["id"],
            where: {
                id: ar.id,
            },
        });
        if (ll) {
            usr.push(ar);
        }
    }
    let uf = [];
    for (let i = 0; i < usr.length; i++) {
        let usrID = usr[i].id;
        if (usrID) {
            uf.push(usrID);
        }
    }
    console.log("Hey", uf);
    let dat = await user.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [
            ["createdAt", order]
        ],
        where: {
            id: {
                [Sequelize.Op.in]: uf,
            },
        },
    });
    const response = paginate.getPagingData(dat, page, limit);
    //console.log("Other array", usr[0].first_name)

    res.send(response);
};
// let one = "Ss"
// let queryString = `SELECT * FROM users as U WHERE U.id=${one};`
self.getAll = async(req, res) => {
    // let x = await user.findOne({
    //     where: {
    //         id: "00a340e3-431a-489f-a859-6d0c9d15e894"
    //     }
    // })
    // return res.json({
    //     first_name: await decrypt(x.first_name),
    //     middle_name: await decrypt(x.middle_name),
    //     last_name: await decrypt(x.last_name)
    // })
    let data = await user.findAll();

    return res.json(data);
    // let one = "12c85269-9dc5-4e89-8d47-62719baea7ed"
    // let queryString = `SELECT first_name FROM users as U WHERE U.id='${one}';`
    // let queryString = "SELECT *  FROM users as U JOIN actionstates as A WHERE U.id=A.model_id AND A.action='REGISTER';"
    // let userData = await sequelize.query(
    //     queryString, { type: sequelize.QueryTypes.SELECT }
    // );

    // console.log("The user is", userData)

    res.send(userData);
};

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await user.findOne({
            where: {
                id: id,
            },
        });

        if (data) {
            let usEmail = await useremail.findOne({
                where: {
                    user_id: data.id,
                    is_primary: true,
                },
            });

            let usPhone = await userphone.findOne({
                where: {
                    user_id: data.id,
                    is_primary: true,
                },
            });

            let temp = data.toJSON();
            temp.email = usEmail ? usEmail.email : null;
            temp.phone = usPhone ? usPhone.phone : null;

            return res.json(temp);
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

self.search = async(req, res) => {
    try {
        let text = req.params.key;
        let data = await user.findAll({
            where: {
                first_name: {
                    like: "%" + text + "%",
                },
                // middle_name: {
                //     like: '%' + text + '%'
                // },
                // last_name: {
                //    like: "%" + text + "%"
                // },
                // first_name: {
                //    like: "%" + text + "%"
                // },
                // email: {
                //    like: "%" + text + "%"
                // },
                // phone: {
                //    like: "%" + text + "%"
                // }
            },
        });
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

self.isEmailValid = async(email) => {
    try {
        return emailValidator.validate(email);
    } catch (error) {
        return { message: error.message };
    }
};

self.save = async(req, res) => {
    try {

        let body = req.body;

        //check email is really exist
        let val = await self.isEmailValid(body.email);
        if (!val.valid) {
            return res.status(422).json({
                message: "The provided email address does not exist!",
            });
        }

        const salt = await bcrypt.genSalt(10);
        var usr = {
            first_name: body.first_name,
            last_name: body.last_name,
            middle_name: body.middle_name,

            gender: body.gender,
            marital_status: body.marital_status,
            partner_name: body.partner_name,
            birth_date: body.birth_date,
            revision_no: body.revision_no,
            // password: await bcrypt.hash(body.password, salt)
        };
        created_user = await user.create(usr);

        if (created_user) {
            let usr = await usrData.userData(req, res);
            await actionstate.create({
                model_id: created_user.id,
                model: "user",
                action: "REGISTER",
                user_id: usr.usrID,
                position_id: usr.position_id,
                time: new Date(),
            });

            // await actionHelper.saveActionState(created_user.id, "user", "REGISTER", usr.usrID, req, res)
            //create position
            let usemail = await useremail.create({
                user_id: created_user.id,
                email: body.email,
                is_primary: true,
            });

            if (usemail) {
                actionHelper.saveActionState(
                    usemail.id,
                    "useremail",
                    "REGISTER",
                    usr.usrID,
                    req,
                    res
                );

                let usphone = await userphone.create({
                    user_id: created_user.id,
                    phone: body.phone,
                    is_primary: true,
                });
                //email to user
                const resetString = uuid.v4() + created_user.id;
                await passwordreset.create({
                    user_id: created_user.id,
                    token: resetString,
                    expiresAt: Date.now() + 3600000,
                    is_used: false,
                });

                //send
                const redirectUrl = body.redirectUrl;
                const salt = await bcrypt.genSalt();
                const hashedResetString = await bcrypt.hash(resetString, salt);
                var mailOptions = {
                    from: "1space.mia@gmail.com",
                    // from: process.env.AUTH_EMAIL,
                    to: body.email,
                    subject: "Setup Password",
                    html: `
					<p>Your are registered to ONESPACE, click on the link below to fillout your password</p>
					<p><a href= ${redirectUrl}${created_user.id}/${hashedResetString.replace(
            /\//g,
            "slash"
          )}>Link to setup password</a></p>
					`,
                };

                var transporter = nodemailer.createTransport(
                    smtpTransport({
                        service: "gmail",
                        host: "smtp.gmail.com",
                        secure: false,
                        auth: {
                            user: "1space.mia@gmail.com",
                            pass: "rjxcwxgyrijvturw",
                        },
                    })
                );

                transporter.sendMail(mailOptions, function(error, info) {
                    if (error) {
                        return res.json("error" + error);
                    } else {
                        return res.json({
                            message: "Email sent successfully",
                        });
                    }
                });

                if (usphone) {
                    if (usphone) {
                        actionHelper.saveActionState(
                            usphone.id,
                            "userphone",
                            "REGISTER",
                            usr.usrID,
                            req,
                            res
                        );
                    }

                    let pos = await position.findOne({
                        where: {
                            id: body.position_id,
                        },
                    });
                    if (pos) {
                        let uspos = await userposition.create({
                            user_id: created_user.id,
                            department_id: pos.department_id,
                            position_id: body.position_id,
                            is_primary: true,
                        });

                        if (uspos) {
                            actionHelper.saveActionState(
                                uspos.id,
                                "userposition",
                                "REGISTER",
                                usr.usrID,
                                req,
                                res
                            );
                        }
                    }
                }
            }
        }

        return res.json(created_user);
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

self.update = async(req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        let data = await user.update(body, {
            where: {
                id: id,
            },
        });
        return res.status(200).json({ message: "User updated succesfully" });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

self.delete = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await user.destroy({
            where: {
                id: id,
            },
        });
        return res.json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

self.getDepartmentUsers = async(req, res) => {
    try {
        let id = req.params.id;

        let pos = await userposition.findAll({
            attributes: ["user_id"],
            where: {
                department_id: id,
            },
        });

        let userId = [...new Set(pos.map((item) => item.user_id))].filter((n) => n);

        let users = await user.findAll({
            where: {
                id: {
                    [Op.in]: userId,
                },
            },
        });

        return res.json(users);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

self.assignPosition = async(req, res) => {
    try {
        let body = req.body;
        let existing = await userposition.findOne({
            where: {
                user_id: body.user_id,
                position_id: body.position_id,
            },
        });

        if (existing) {
            if (existing.status) {
                return res.status(302).json({
                    message: "User Already assigned this position",
                });
            } else {
                await userposition.update({ status: true }, {
                    where: {
                        id: existing.id,
                    },
                });
                return res.status(200).json({
                    message: "Position enabled!",
                });
            }
        } else {
            let pos = await position.findOne({
                where: {
                    id: body.position_id,
                },
            });
            let data = await userposition.create(body);
            data.status = true;
            data.department_id = pos.department_id;
            await data.save();

            return res.status(200).json(data);
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

self.dePosition = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await userposition.findOne({
            where: {
                id: id,
            },
        });

        if (data) {
            if (data.status) {
                let updated = await userposition.update({ status: false }, {
                    where: {
                        id: id,
                    },
                });
                if (updated) {
                    return res.json({
                        message: "User Position is Disable",
                    });
                }
            } else {
                return res.status(302).json({
                    message: "Already Disabled!",
                });
            }
        } else {
            return res.status(404).json({
                message: "User Position is not Found!",
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

self.switchAccount = async(req, res) => {
    try {
        let body = req.body;
        let usr = await usrData.userData(req, res);
        //position_id === userposition_id
        const userpos = await userposition.findOne({
            where: {
                id: body.position_id,
            },
        });
        const pos = await position.findOne({ where: { id: userpos.position_id } });

        const account = await user.findOne({
            where: { id: usr.usrID },
            include: [{ model: userposition, as: "positions" }],
        });

        // let usrRole = await role.findOne({ where: { id: pos.role_id } })
        const usEmail = await useremail.findOne({
            where: { user_id: account.id, is_primary: true },
        });

        const usPhone = await userphone.findOne({
            where: { user_id: account.id, is_primary: true },
        });

        let userphoto = await photo.findOne({
            where: {
                model_id: account.id,
            },
        });

        let { id, first_name, middle_name, last_name, gender } = account;
        let { email } = usEmail || {};
        let { phone } = usPhone || {};

        //show if it is checked

        let action = await actionstate.findOne({
            where: {
                model_id: usr.usrID,
                action: "CHECK",
            },
        });
        let profile_pic = await photo.findOne({
            where: {
                model_id: usr.usrID,
                type: "USER_PROFILE_PHOTO",
            },
        });

        let replyUser = {
            id,
            first_name,
            middle_name,
            last_name,
            email,
            phone,
            gender,
            position_id: userpos ? userpos.position_id : null,
            position_name: pos ? pos.name : null,

            department_id: userpos.department_id,
            user_position_id: userpos.id,
            is_checked: action ? true : false,
            profile_completed: profile_pic ? true : false,
            // role: usrRole.name,
            avatar: userphoto ? userphoto.url : null,
        };

        try {
            let accessToken = null;
            let refreshToken = null;
            let us = {
                id: account.id,
                department_id: userpos.department_id,
                position_id: userpos.position_id,
            };

            accessToken = jwt.sign(us, TOKEN_KEY, {
                expiresIn: "1000h",
            });
            refreshToken = jwt.sign(us, REFRESH_TOKEN_KEY, {
                expiresIn: "1000h",
            });
            // update refresh token
            await user.update({ refresh_token: refreshToken }, { where: { id: id } });
            return res.status(200).json({
                userData: replyUser,
                accessToken: accessToken,
                refreshToken: refreshToken,
            });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

self.getAllUserPositions = async(req, res) => {
    try {
        let { id } = req.params;

        let data = await userposition.findAll({
            where: { user_id: id },
            include: [
                { model: position, attributes: ["name"] },
                { model: department, attributes: ["name"] },
            ],
        });

        if (!data || data.length === 0) {
            return res.json([]);
        }

        let arr = await Promise.all(
            data.map(async(usrpos) => {
                let temp = usrpos.toJSON();
                let [pos, dept] = await Promise.all([
                    usrpos.getPosition(),
                    usrpos.getDepartment(),
                ]);
                temp.position_name = pos ? pos.name : null;
                temp.department_name = dept ? dept.name : null;
                return temp;
            })
        );

        return res.json(arr);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

// self.addContactPerson = async(req, res) => {
//     try {
//         let data = await
//     } catch (error) {
//     }
// }
self.sendMail = async(req, res) => {
    let body = req.body;
    let email = body.email;

    try {
        let us = await user.findOne({
            where: {
                email: email,
            },
        });
        if (us) {
            const redirectUrl = body.redirectUrl;

            let preset = await passwordreset.findOne({
                where: {
                    user_id: us.id,
                    is_used: false,
                },
            });
            const resetString = preset.token;

            const salt = await bcrypt.genSalt();
            const hashedResetString = await bcrypt.hash(resetString, salt);
            var mailOptions = {
                from: "1space.mia@gmail.com",
                // from: process.env.AUTH_EMAIL,
                to: email,
                subject: "Setup Password",
                html: `

				<p>Your EtCDP account is ready, click on the link below to fillout your password</p>
				<p><a href= ${redirectUrl}${us.id}/${hashedResetString.replace(
          /\//g,
          "slash"
        )}>Link to setup password</a></p>
				`,
            };

            var transporter = nodemailer.createTransport(
                smtpTransport({
                    service: "gmail",
                    host: "smtp.gmail.com",
                    secure: false,
                    auth: {
                        user: "1space.mia@gmail.com",
                        pass: "rjxcwxgyrijvturw",
                    },
                })
            );

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    return res.json("error" + error);
                    console.log(error);
                } else {
                    return res.json({
                        message: "Email sent successfully",
                    });
                }
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

//password reset and requesting it

self.requestPasswordReset = async(req, res) => {
    try {
        const { email, redirectUrl } = req.body;
        //check if user exist

        let encrypted_email = await encrypt(email);

        let usemail = await useremail.findOne({
            where: {
                email: encrypted_email,
                is_primary: true,
            },
        });

        if (!usemail) {
            return res.status(404).json({
                message: "Email not found!",
            });
        }

        //must decrypt email

        let us = await user.findOne({
            where: {
                id: usemail.user_id,
            },
        });

        if (us) {
            const resetString = uuid.v4() + us.id;

            let data = await passwordreset.findOne({
                order: [
                    ["createdAt", "DESC"]
                ],
                where: {
                    user_id: us.id,
                    is_used: false,
                },
            });

            // if(data){
            // 	let created_at = moment(data.createdAt)
            // 	let now = moment()
            // 	let diffInMinutes = now.diff(created_at, "minutes")
            // 	if(diffInMinutes < 30){
            // 		return res.status(500).json({
            // 			message: `You can only request for password reset in 30 minutes interval!`
            // 		})
            // 	}

            // }

            await passwordreset.create({
                user_id: us.id,
                token: resetString,
                expiresAt: Date.now() + 3600000,
                is_used: false,
            });

            // sendEmail(us.id, email, redirectUrl, resetString)
            const salt = await bcrypt.genSalt();
            const hashedResetString = await bcrypt.hash(resetString, salt);

            var mailOptions = {
                from: "1space.mia@gmail.com",
                // from: process.env.AUTH_EMAIL,
                to: email,
                subject: "Password Reset",
                html: `
				<p>Someone just requested to change your EtCDP account's credentials. If this was you, click on the link below to reset them.</p>
				<p><a href= ${redirectUrl}${us.id}/${hashedResetString.replace(
          /\//g,
          "slash"
        )}>Link to reset credentials</a></p>
				<p>This link will expire within 60 minutes. </p>
				<p>If you don't want to reset your credentials, just ignore this message and nothing will be changed.</p>`,
            };

            var transporter = nodemailer.createTransport(
                smtpTransport({
                    service: "gmail",
                    host: "smtp.gmail.com",
                    secure: false,
                    auth: {
                        user: "1space.mia@gmail.com",
                        pass: "rjxcwxgyrijvturw",
                    },
                })
            );

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    return res.json("error" + error);
                    console.log(error);
                } else {
                    return res.json({
                        message: "Password reset link sent to you email",
                    });
                }
            });
        } else {
            return res.status(404).json({
                message: "User not Found!",
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

self.resetPassword = async(req, res) => {
    try {
        let { user_id, resetString, password } = req.body;

        let existing = await passwordreset.findOne({
            order: [
                ["createdAt", "DESC"]
            ],
            where: {
                user_id,
                is_used: false,
            },
        });

        if (existing) {
            // const expiredAt = existing.expiresAt
            // if(expiredAt < Date.now()){
            // 	return res.status(410).json({
            // 		message: 'Password reset link has expired.'
            // 	})
            // }else{

            const hashedResetString = existing.token;
            //FYI resetString is the hashed one from the sent letter
            let hashed = resetString.replace(/slash/g, "/");
            const valid = await bcrypt.compare(hashedResetString, hashed);
            if (valid) {
                const salt = await bcrypt.genSalt();
                const pass = await bcrypt.hash(password, salt);
                await user.update({ password: pass }, {
                    where: {
                        id: user_id,
                    },
                });
                await passwordreset.update({ is_used: true }, {
                    where: {
                        user_id: existing.user_id,
                        is_used: false,
                    },
                });

                return res.status(200).json({
                    message: "Password changed successfully",
                });
            } else {
                return res.json({
                    message: "Invalid reset string",
                });
            }
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
self.checkUserStatus = async(req, res) => {
    let id = req.params.id;
    try {
        let data = await user.findOne({
            where: {
                id: id,
            },
        });
        let action = await actionstate.findOne({
            where: {
                model_id: id,
                action: "CHECK",
            },
        });
        let profile_pic = await photo.findOne({
            where: {
                model_id: id,
                type: "USER_PROFILE_PHOTO",
            },
        });

        let messageArr = [];

        if (!action) {
            messageArr.push("check your profile by clicking on \"Registered\" button");
        }

        if (!profile_pic) {
            messageArr.push("upload your profile picture");
        }

        return res.json(messageArr);
    } catch (error) {
        return response.json({
            message: error.message,
        });
    }
};

module.exports = self;