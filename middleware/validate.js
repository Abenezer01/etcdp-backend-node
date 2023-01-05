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
module.exports = {
    createUser,
    stakeholderCategoryValidate
};