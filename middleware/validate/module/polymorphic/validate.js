const validateReply = require('../../../../utils/validateerror');
const addressValidate = async(req, res, next) => {
    const validationRule = {
        "model_id": "required|string",
        "country": "required|string",
        "northing": "required",
        "easting": "required"
    };

    await validateReply(req.body, validationRule, res, next)
}
module.exports = {
    addressValidate
};