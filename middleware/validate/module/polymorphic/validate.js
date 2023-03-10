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
const modelMenuValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "module_type_id": "required|string",
        "module": "required|string",
        "models": "required"
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
const noteValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "model": "required|string",
        "model_id": "required|string",
        "user_id": "string",
        "description": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const replyValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "actionstate_id": "required|string",
        "creator_id": "string",
        "content": "required|string",
        "type": "string",
        "status": "boolean",
        "is_authorized": "boolean"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const photoValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    if (!req.files) {
        return res.status(412).json({
            message: "File is empty"
        })
    }
    if (!req.files.upload) {
        return res.status(412).json({
            message: "Attachement is empty"
        })
    }
    const validationRule = {
        "type": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
module.exports = {
    addressValidate,
    modelMenuValidate,
    actionStateValidate,
    noteValidate,
    replyValidate,
    photoValidate
};