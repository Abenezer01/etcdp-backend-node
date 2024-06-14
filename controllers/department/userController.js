const {
    User,
    Address,
    ActionState,
    Position,
    UserPosition,
    UserEmail,
    UserPhone,
    Department,
    PasswordReset,
    Photo,
    Role,
    sequelize,
    Sequelize,
} = require("../../models");
const bcrypt = require("bcrypt");
let validator = require("../../utils/validator");
const Op = Sequelize.Op;
const dotenv = require("dotenv");
dotenv.config();
const usrData = require("../../utils/userDataFromToken");
const { userInfo } = require("../../utils/userInfo");

const actionHelper = require("../utils/action-helper");
const cipherHelper = require("../utils/cipher-helper");
const jwt = require("jsonwebtoken");

//emailer
const uuid = require("uuid");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const emailValidator = require("deep-email-validator");
const paginationHelper = require("../utils/pagination-helper")
const { getRecordById, saveRecord, updateRecord, deleteRecord } = require('../utils/format-helper');


let TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;
let REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY;
let TOKEN_MAX_AGE = process.env.TOKEN_MAX_AGE;

let self = {};

self.getAll = async (req, res) => {

   
    try {
      const whereCondition = { }
  
      const includeOptions = [
        {
            model: UserEmail,
            as: 'useremails',
            attributes: ['email'] 
        },
        {
            model: UserPhone,
            as: 'userphones',
            attributes: ['phone'] 
        }
      ];

  
      const paginatedResult = await paginationHelper(User, req, whereCondition, includeOptions);
  

      const usersWithEmail = paginatedResult.data.map(user => {
        const userJson = user.toJSON();
        userJson.email = userJson.useremails ? userJson.useremails.email : null;
        userJson.phone = userJson.userphones ? userJson.userphones.phone : null;
        delete userJson.useremails; // Remove the nested emailInfo object
        delete userJson.userphones; // Remove the nested emailInfo object
        return userJson;
      });
      // Use the response formatter to send the success response
      res.apiSuccess({
        data: usersWithEmail,
        total: paginatedResult.total,
      }, paginatedResult.pagination);
  
    } catch (error) {
      console.error("Error in getAll method:", error);
      res.apiError(error);
    }
  };

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await User.findOne({
            where: {
                id: id,
            }
        });

        if (data) {
            let usEmail = await UserEmail.findOne({
                where: {
                    user_id: data.id,
                    is_primary: true,
                },
            });

            let usPhone = await UserPhone.findOne({
                where: {
                    user_id: data.id,
                    is_primary: true,
                },
            });

            let temp = data.toJSON();
            temp.email = usEmail ? usEmail.email : null;
            temp.phone = usPhone ? usPhone.phone : null;

            res.apiSuccess({
                data: temp,
                total: 1 // Assuming a single user is being returned
              }, {
                pageSize: 1,
                page: 1
              });
            // return res.json(temp);
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
        let data = await User.findAll({
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

        //check email is really exist -- consider the domain inclusiveness like eiabc.edu.et
        // let val = await self.isEmailValid(body.email);
        // if (!val.valid) {
        //     return res.status(422).json({
        //         message: "The provided email address does not exist!",
        //     });
        // }

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
            lang: "en"
            // password: await bcrypt.hash(body.password, salt)
        };
        created_user = await User.create(usr);

        if (created_user) {
            let usr = await usrData.userData(req, res);
            await ActionState.create({
                model_id: created_user.id,
                model: "User",
                action: "REGISTER",
                user_id: usr.usrID,
                position_id: usr.position_id,
                time: new Date(),
            });

            // await actionHelper.saveActionState(created_user.id, "User", "REGISTER", usr.usrID, req, res)
            //create Position
            let usemail = await UserEmail.create({
                user_id: created_user.id,
                email: body.email,
                is_primary: true,
            });

            if (usemail) {
                actionHelper.saveActionState(
                    usemail.id,
                    "UserEmail",
                    "REGISTER",
                    usr.usrID,
                    req,
                    res
                );

                let usphone = await UserPhone.create({
                    user_id: created_user.id,
                    phone: body.phone,
                    is_primary: true,
                });
                //email to user
                const resetString = uuid.v4() + created_user.id;
                await PasswordReset.create({
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
                            "UserPhone",
                            "REGISTER",
                            usr.usrID,
                            req,
                            res
                        );
                    }

                    let pos = await Position.findOne({
                        where: {
                            id: body.position_id,
                        },
                    });
                    if (pos) {
                        let uspos = await UserPosition.create({
                            user_id: created_user.id,
                            department_id: pos.department_id,
                            position_id: body.position_id,
                            is_primary: true,
                        });

                        if (uspos) {
                            actionHelper.saveActionState(
                                uspos.id,
                                "UserPosition",
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

        res.apiSuccess({
            data: created_user,
            total: 1 // Assuming a single user is being returned
          }, {
            pageSize: 1,
            page: 1
          });

        // return res.json(created_user);
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

self.update = async (req, res) => {
    updateRecord(User, req, res);
  };
  
  self.delete = async (req, res) => {
    deleteRecord(User, req, res);
  };

  self.getDepartmentUsers = async (req, res) => {

    const { id } = req.params;
    try {

        let pos = await UserPosition.findAll({
            attributes: ["user_id"],
            where: {
                department_id: id,
            },
        });

        let userId = [...new Set(pos.map((item) => item.user_id))].filter((n) => n);

        const whereCondition = {  id: {
            [Op.in]: userId,
        }, }

        const paginatedResult = await paginationHelper(User, req, whereCondition);
    
        // Use the response formatter to send the success response
        res.apiSuccess({
            data: paginatedResult.data,
            total: paginatedResult.total,
        }, paginatedResult.pagination);
    
    } catch (error) {
      console.error("Error in getAll method:", error);
      res.apiError(error);
    }
  };


self.assignPosition = async(req, res) => {
    try {
        let body = req.body;
        let existing = await UserPosition.findOne({
            where: {
                user_id: body.user_id,
                position_id: body.position_id,
            },
        });

        if (existing) {
            if (existing.status) {
                return res.status(302).json({
                    message: "User Already assigned this Position",
                });
            } else {
                await UserPosition.update({ status: true }, {
                    where: {
                        id: existing.id,
                    },
                });
                return res.status(200).json({
                    message: "Position enabled!",
                });
            }
        } else {
            let pos = await Position.findOne({
                where: {
                    id: body.position_id,
                },
            });
            let data = await UserPosition.create(body);
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
        let data = await UserPosition.findOne({
            where: {
                id: id,
            },
        });

        if (data) {
            if (data.status) {
                let updated = await UserPosition.update({ status: false }, {
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
        const userpos = await UserPosition.findOne({
            where: {
                id: body.position_id,
            },
        });
        const pos = await Position.findOne({ where: { id: userpos.position_id } });

        const account = await User.findOne({
            where: { id: usr.usrID },
            include: [{ model: UserPosition, as: "positions" }],
        });

        // let usrRole = await Role.findOne({ where: { id: pos.role_id } })
        const usEmail = await UserEmail.findOne({
            where: { user_id: account.id, is_primary: true },
        });

        const usPhone = await UserPhone.findOne({
            where: { user_id: account.id, is_primary: true },
        });

        let userphoto = await Photo.findOne({
            where: {
                model_id: account.id,
            },
        });

        let { id, first_name, middle_name, last_name, gender } = account;
        let { email } = usEmail || {};
        let { phone } = usPhone || {};

        //show if it is checked

        let action = await ActionState.findOne({
            where: {
                model_id: usr.usrID,
                action: "CHECK",
            },
        });
        let profile_pic = await Photo.findOne({
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
            // Role: usrRole.name,
            avatar: userphoto ? userphoto.url : null,
        };

        try {
            let accessToken = null;
            let refreshToken = null;
            let us = {
                id: account.id,
                department_id: userpos.department_id,
                position_id: userpos.position_id,
                lang: account.lang
            };

            accessToken = jwt.sign(us, TOKEN_KEY, {
                expiresIn: "1000h",
            });
            refreshToken = jwt.sign(us, REFRESH_TOKEN_KEY, {
                expiresIn: "1000h",
            });
            // update refresh token
            await User.update({ refresh_token: refreshToken }, { where: { id: id } });
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

        let data = await UserPosition.findAll({
            where: { user_id: id },
            include: [
                { model: Position, attributes: ["name"] },
                { model: Department, attributes: ["name"] },
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
self.sendMail = async(req, res) => {
    let body = req.body;
    let email = body.email;

    try {
        let us = await User.findOne({
            where: {
                email: email,
            },
        });
        if (us) {
            const redirectUrl = body.redirectUrl;

            let preset = await PasswordReset.findOne({
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

        let encrypted_email = cipherHelper.encrypt(email);

        let usemail = await UserEmail.findOne({
            where: {
                email: encrypted_email,
                is_primary: true,
            },
        });

        if (!usemail) {
            const errorResponse = {
                _links: {
                  previousPage: null,
                  nextPage: null
                },
                _warning: [],
                payload: [],
                _attributes: {},
                _errors: {
                  message: ["User not Found"]
                },
                _generated: new Date().toISOString()
              };
            return res.status(404).json(errorResponse);
        }

        //must decrypt email

        let us = await User.findOne({
            where: {
                id: usemail.user_id,
            },
        });

        if (us) {
            const resetString = uuid.v4() + us.id;

            // let data = await PasswordReset.findOne({
            //     order: [
            //         ["created_at", "DESC"]
            //     ],
            //     where: {
            //         user_id: us.id,
            //         is_used: false,
            //     },
            // });

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

            await PasswordReset.create({
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
                    tls: {
                        rejectUnauthorized: false
                    }
                })
            );


            transporter.sendMail(mailOptions, function(error, info) {

                if (error) {
                    console.log(error);
                    res.apiError(error);
                    // return res.status(500).json(error)
                } else {

                    res.apiSuccess({
                        data: { message: "Password reset link sent to you email"},
                        total: 1 // Assuming a single user is being returned
                      }, {
                        pageSize: 1,
                        page: 1
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

        let existing = await PasswordReset.findOne({
            order: [
                ["created_at", "DESC"]
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
                await User.update({ password: pass }, {
                    where: {
                        id: user_id,
                    },
                });
                await PasswordReset.update({ is_used: true }, {
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
        let data = await User.findOne({
            where: {
                id: id,
            },
        });
        let action = await ActionState.findOne({
            where: {
                model_id: id,
                action: "CHECK",
            },
        });
        let profile_pic = await Photo.findOne({
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
self.changeLanguage = async(req, res) =>{
    try {

        let body = req.body 
        let lang = body.lang


        let usr = await usrData.userData(req, res);
        let us = await User.update({lang:lang}, {
            where: {
                id:usr.usrID
            }
        })

        if(us){
            return res.status(200).json({
                message: "Language changed successfully!"
            })
        }else{
            return res.status(500).json({
                message: "Try Again!"
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
} 
self.activateAccount = async(req, res) => {
    try {
        let {id} = req.params
        let data = await User.update({is_activated: true}, {
            where: {
                id: id
            }
        })

        return res.json({
            message: "Account activated successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
self.deactivateAccount = async(req, res) => {
    try {
        let {id} = req.params
        let data = await User.update({is_activated: false}, {
            where: {
                id: id
            }
        })

        return res.json({
            message: "Account deactivated successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}



self.getMe = async (req, res) => {
  try {
    const user = await userInfo(req, res)

    // if ( user =! "TOKEN_MISSING" || user != "INVALID_EXPIRED_TOKEN")
    // return res.json(user)
    switch (user) {
        case "TOKEN_MISSING":
            return res.status(404).json({
                status: 404,
                _links: {
                  previousPage: null,
                  nextPage: null
                },
                _warning: [],
                payload: [],
                _attributes: {},
                _errors: [{ message: "Authorization token is missing" }],
                _generated: new Date().toISOString()
              })
           
             
            break;
        case "INVALID_EXPIRED_TOKEN":

        
            return res.status(401).json({
                _links: {
                previousPage: null,
                nextPage: null
                },
                _warning: [],
                payload: [],
                _attributes: {},
                _errors: [{ message: "Invalid Authorization header format" }],
                _generated: new Date().toISOString()
            })
            break;
        case "TOKEN_NOT_FOUND":

            return res.status(404).json({
                _links: {
                previousPage: null,
                nextPage: null
                },
                _warning: [],
                payload: [],
                _attributes: {},
                _errors: [{ message: "Authorization token is missing" }],
                _generated: new Date().toISOString()
            })
            break;
            
    
        default:
            // return res.json("default")
            break;

    }

    const usr = await User.findOne({
      where: { id: user.usrID, is_activated: true },
      include: [{ model: UserPosition, as: "positions" }]
    });

    const [usPos, usPhone] = await Promise.all([
      UserPosition.findOne({ where: { user_id: usr.id, is_primary: true } }),
      UserPhone.findOne({ where: { user_id: usr.id, is_primary: true } })
    ]);

    const pos = await Position.findOne({ where: { id: usPos.position_id } });
    const action = await ActionState.findOne({ where: { model_id: usr.id, action: "CHECK" } });
    const profile_pic = await Photo.findOne({ where: { model_id: usr.id, type: "USER_PROFILE_PHOTO" } });

    // const userPayload = {
    //   id: usr.id,
    //   department_id: pos.department_id,
    //   position_id: pos.id,
    //   lang: usr.lang
    // };

    // const accessToken = jwt.sign(userPayload, process.env.ACCESS_TOKEN_KEY, { expiresIn: "1000h" });

    const replyUser = {
      id: usr.id,
      full_name: usr.full_name,
      name: usr.name,
      first_name: usr.first_name,
      middle_name: usr.middle_name,
      last_name: usr.last_name,
      phone: usPhone?.phone,
      gender: usr.gender,
      position_id: pos.id,
      position_name: pos.name,
      department_id: usPos.department_id,
      user_position_id: usPos.id,
      is_checked: !!action,
      profile_completed: !!profile_pic,
    };

    const data = { user_data: replyUser };

    res.apiSuccess({
      data: data,
      total: 1 // Assuming a single user is being returned
    }, {
      pageSize: 1,
      page: 1
    });
  } catch (error) {
    console.error("Error:", error);
    res.apiError(error);
  }
};


module.exports = self;