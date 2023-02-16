const validator = require('../../../../utils/validator');
const validateReply = require('../../../../utils/validateerror');

const constructionResourceTypeValidate = async(req, res, next) => {
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
const constructionResourceCategoryValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "resourcetype_id": "required|string",
        "title": "required|string",
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const constructionResourceSubCategoryValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "resourcetype_id": "required|string",
        "resourcecategory_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const constructionResourceValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "resourcetype_id": "required|string",
        "resourcecategory_id": "required|string",
        "resourcesubcategory_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const constructionResourceQuantityandPriceValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "resourcetype_id": "required|string",
        "resourcecategory_id": "required|string",
        "resourcesubcategory_id": "required|string",
        "name": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
module.exports = {
    constructionResourceCategoryValidate,
    constructionResourceQuantityandPriceValidate,
    constructionResourceSubCategoryValidate,
    constructionResourceTypeValidate,
    constructionResourceValidate
};