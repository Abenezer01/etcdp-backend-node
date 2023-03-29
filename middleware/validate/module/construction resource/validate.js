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
        "title": "required|string"
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
        "title": "required|string"
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
const detailResourceTypeValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "resource_id": "required|string",
        "title": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const resourceBrandValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "resource_id": "required|string",
        "title": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const resourceSpecificationValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "resource_id": "required|string",
        "title": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const resourcePriceValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "resource_id": "required|string",
        "resourcebrand_id": "required|string",
        "detailresourcetype_id": "required|string",
        "unit_price": "required|integer"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const resourceQuantityValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "resource_id": "required|string",
        "resourcebrand_id": "required|string",
        "detailresourcetype_id": "required|string",
        "quantity": "required|integer",
        "unit_price": "required",
        "date": "required|date",
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const resourceImageValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    if (!req.files) {
        return res.status(412).json({
            message: "There is no image file attached"
        })
    } else if (!req.files.image) {
        return res.status(412).json({
            message: "There is no image field on file upload"
        })
    } else {
        next()
    }
}
module.exports = {
    constructionResourceCategoryValidate,
    constructionResourceQuantityandPriceValidate,
    constructionResourceSubCategoryValidate,
    constructionResourceTypeValidate,
    constructionResourceValidate,
    detailResourceTypeValidate,
    resourceBrandValidate,
    resourcePriceValidate,
    resourceQuantityValidate,
    resourceSpecificationValidate,
    resourceImageValidate
};