const validator = require('../../../../utils/validator');
const Validatorr = require('validatorjs');
const validateReply = require('../../../../utils/validateerror');
// const {
//     user
// } = require("../models");

const stakeholderCategoryValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "stakeholdertypeId": "required|string",
        "title": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const stakeholderSubCategoryValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "title": "required|string",
        "stakecategoryId": "required|string",
        "stakeholdertypeId": "required|string",
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const stakeholderTypeValidate = async(req, res, next) => {
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
const ownerShipValidate = async(req, res, next) => {
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
const buisnessFieldValidate = async(req, res, next) => {
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
const studyProgramValidate = async(req, res, next) => {
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
const stakeHolderValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "stakecategory_id": "required|string",
        "stakesubcategory_id": "required|string",
        "trade_name": "required|string",
        "tin": "required|string",
        "ownership_id": "required|string",
        "businessfield_id": "required|string",
        "origin": "required|string",
        "operation_location": "required|string",
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const stakeHolderInfo = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "stakeholder_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const certificateValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "stakeholder_id": "required|string",
        "title": "required|string",
        "date_of_issue": "required|date"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const totalEmployeeValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "stakeholder_id": "required|string",
        "year": "required|date",
        "domain": "required|string",
        "nationality": "required|string",
        "gender": "required|string",
        "quantity": "required|integer"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const studyLevelValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "title": "required|string",
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
        "name": "required|string",
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const educationValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "stakeholder_id": "required|string",
        "year": "required|date",
        "domain": "required|string",
        "gender": "required|string",
        "studylevel_id": "required|string",
        "quantity": "required|integer"

    };
    let bodyArr = req.body.arr
    for (i = 0; i < bodyArr.length; i++) {
        await validateReply.validateReply(bodyArr[i], validationRule, res, next)
    }



}
const ageLevelValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "title": "required|string",

    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const employeeAgeValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "stakeholder_id": "required|string",
        "year": "required|date",
        "domain": "required|string",
        "gender": "required|string",
        "agelevel_id": "required|string",
        "quantity": "required|integer"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const experienceLevelValidate = async(req, res, next) => {
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
const workExperienceValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "stakeholder_id": "required|string",
        "year": "required|date",
        "domain": "required|string",
        "gender": "required|string",
        "experiencelevel_id": "required|string",
        "quantity": "required|integer"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const workExperienceLevelValidate = async(req, res, next) => {
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
const trainingValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "stakeholder_id": "required|string",
        "title": "required|string",
        "training": "required|string",
        "provider": "required|string",
        "provision_date": "required|date"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const regulationValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "stakeholder_id": "required|string",
        "title": "required|string",
        "prepared_by": "required|string",
        "effective_start_date": "required|date",
        "effective_end_date": "required|date"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const studyFieldValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "title": "required|string",
        "study_program_id": "required|string",
        "studylevel_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}

const stakeholderStudyFieldValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "stakeholder_id": "required|string",
        "studyfield_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const studyPeriodCostValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "higher_institute_id": "required|string",
        "stake_study_field_id": "required|string",
        "study_program_id": "required|string",
        "studylevel_id": "required|string",
        "total_month": "required|date",
        "study_cost": "required",
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const graduateValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "higher_institute_id": "required|string",
        "stake_study_field_id": "required|string",
        "study_program_id": "required|string",
        "studylevel_id": "required|string",
        "study_period_id": "required|string",
        "male": "required|integer",
        "female": "required|integer",
        "year": "required|date",
        "agelevel_id": "required|string",
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const constructionRelatedServiceValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "type_of_service": "required|string",
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const StakeholderServiceValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "stakeholder_id": "required|string",
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
module.exports = {
    stakeholderCategoryValidate,
    stakeholderSubCategoryValidate,
    ownerShipValidate,
    stakeholderTypeValidate,
    buisnessFieldValidate,
    stakeHolderValidate,
    ownerShipValidate,
    buisnessFieldValidate,
    stakeHolderInfo,
    certificateValidate,
    totalEmployeeValidate,
    studyLevelValidate,
    departmentValidate,
    educationValidate,
    ageLevelValidate,
    employeeAgeValidate,
    experienceLevelValidate,
    workExperienceValidate,
    trainingValidate,
    regulationValidate,
    studyFieldValidate,
    stakeholderStudyFieldValidate,
    studyPeriodCostValidate,
    constructionRelatedServiceValidate,
    graduateValidate,
    workExperienceLevelValidate,
    studyProgramValidate,
    StakeholderServiceValidate
};