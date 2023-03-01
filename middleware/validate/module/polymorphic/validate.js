const validateReply = require('../../../../utils/validateerror');
const addressValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "model_id": "required|string",
        "country": "required|string",
        "northing": "required",
        "easting": "required"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const actionStateValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    let modelParam = req.params.model
    if (!modelParam) {
        return res.status(400).json({
            message: "Empty model"
        })
    }
}
module.exports = {
    addressValidate,
    actionStateValidate
};