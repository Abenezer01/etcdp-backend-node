const validator = require('../../../../utils/validator');
const validateReply = require('../../../../utils/validateerror');
// const {
//     user
// } = require("../models");
// const validateReply = async(body, validationRule, res, next) => {


//     await validator(body, validationRule, {}, (err, status) => {
//         if (!status) {
//             res.status(412)
//                 .send({
//                     success: false,
//                     message: 'Validation failed',
//                     error: err.errors,
//                 });
//             console.log("The error", err)
//         } else {
//             next();
//         }
//     }).catch(err => console.log(err))
// }
const createUser = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        // "email": "required|email|exist:User,email",
        "email": "required|email",
        "first_name": "required|string",
        "middle_name": "required|string",
        "last_name": "required|string",
        "phone": "required|string",
        "password": "string|min:6",
        "gender": "string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const positionValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "department_id": "required|string",
        "name": "required|string",
        "is_head": "boolean",
        "role_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const departmentValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "name": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const roleValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "name": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const userPhotoValidate = async(req, res, next) => {
    if (!req.files) {
        return res.status(412).json({
            message: "File is empty"
        })
    }
    const array_of_allowed_files = ['png', 'jpeg', 'jpg', 'gif'];
    const ext = req.files.upload.mimetype.split("/")[1];

    // Check if the uploaded file is allowed
    if (!array_of_allowed_files.includes(ext)) {
        // throw Error('Invalid file');
        res.status(412)
            .send({
                success: false,
                message: 'File must be png,jpeg,jpg or gif',
                data: "Invalid file"
            });
    } else {
        next();
    }
}
module.exports = {
    createUser,
    userPhotoValidate,
    positionValidate,
    departmentValidate,
    roleValidate
};