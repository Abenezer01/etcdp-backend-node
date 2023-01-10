const validator = require('../utils/validator');
const createUser = async(req, res, next) => {
    const validationRule = {
        "email": "required|string|email",
        "first_name": "required|string",
        "middle_name": "required|string",
        "last_name": "required|string",
        "phone": "required|string",
        "password": "required|string|min:6",
        "gender": "string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const stakeholderCategoryValidate = async(req, res, next) => {
    const validationRule = {
        "title": "required|string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
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
    stakeholderCategoryValidate,
    userPhotoValidate
};