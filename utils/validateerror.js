const validator = require('./validator');
// const {
//     user
// } = require("../models");
const validateReply = async(body, validationRule, res, next) => {


    await validator(body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
            console.log("The error", err)
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
module.exports = validateReply;