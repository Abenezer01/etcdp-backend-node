const validator = require('../utils/validator');
const Validatorr = require('validatorjs');
const {
    user
} = require("../models");
const createUser = async(req, res, next) => {
    const validationRule = {
        // "email": "required|email|exist:User,email",
        "email": "required|email",
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
                    error: err.errors,
                });
            console.log("The error", err)
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
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const stakeholderSubCategoryValidate = async(req, res, next) => {
    const validationRule = {
        "title": "required|string",
        "stakecategoryId": "required|string",
        "stakeholdertypeId": "required|string",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const stakeholderTypeValidate = async(req, res, next) => {
    const validationRule = {
        "title": "required|string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const ownerShipValidate = async(req, res, next) => {
    const validationRule = {
        "title": "required|string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const buisnessFieldValidate = async(req, res, next) => {
    const validationRule = {
        "title": "required|string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const stakeHolderValidate = async(req, res, next) => {
    const validationRule = {
        "stakecategory_id": "required|string",
        "stakesubcategory_id": "required|string",
        "trade_name": "required|string",
        "tin": "required|string",
        "ownership_id": "required|string",
        "buisnessfield_id": "required|string",
        "origin": "required|string",
        "operation_location": "required|string",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const stakeHolderInfo = async(req, res, next) => {
    const validationRule = {
        "stakeholder_id": "required|string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const certificateValidate = async(req, res, next) => {
    const validationRule = {
        "stakeholder_id": "required|string",
        "title": "required|string",
        "date_of_issue": "required|date"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const totalEmployeeValidate = async(req, res, next) => {
    const validationRule = {
        "stakeholder_id": "required|string",
        "year": "required|date",
        "domain": "required|string",
        "nationality": "required|string",
        "gender": "required|string",
        "quantity": "required|integer"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const studyLevelValidate = async(req, res, next) => {
    const validationRule = {
        "title": "required|string",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const departmentValidate = async(req, res, next) => {
    const validationRule = {
        "name": "required|string",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const educationValidate = async(req, res, next) => {
    const validationRule = {
        "stakeholder_id": "required|string",
        "year": "required|date",
        "domain": "required|string",
        "gender": "required|string",
        "studylevel_id": "required|string",
        "quantity": "required|integer"

    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const ageLevelValidate = async(req, res, next) => {
    const validationRule = {
        "title": "required|string",

    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const employeeAgeValidate = async(req, res, next) => {
    const validationRule = {
        "stakeholder_id": "required|string",
        "year": "required|date",
        "domain": "required|string",
        "gender": "required|string",
        "agelevel_id": "required|string",
        "quantity": "required|integer"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const experienceLevelValidate = async(req, res, next) => {
    const validationRule = {
        "title": "required|string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const workExperienceValidate = async(req, res, next) => {
    const validationRule = {
        "stakeholder_id": "required|string",
        "year": "required|date",
        "domain": "required|string",
        "gender": "required|string",
        "experiencelevel_id": "required|string",
        "quantity": "required|integer"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const trainingValidate = async(req, res, next) => {
    const validationRule = {
        "stakeholder_id": "required|string",
        "title": "required|string",
        "training": "required|string",
        "provider": "required|string",
        "provision_date": "required|date"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const regulationValidate = async(req, res, next) => {
    const validationRule = {
        "stakeholder_id": "required|string",
        "title": "required|string",
        "prepared_by": "required|string",
        "effective_start_date": "required|date",
        "effective_end_date": "required|date"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const studyFieldValidate = async(req, res, next) => {
    const validationRule = {
        "title": "required|string",
        "study_program": "required|string",
        "studylevel_id": "required|string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const studyPeriodCostValidate = async(req, res, next) => {
    const validationRule = {
        "higher_institute_id": "required|string",
        "studyfield_id": "required|string",
        "study_program": "required|string",
        "studylevel_id": "required|string",
        "study_period": "required|date",
        "study_cost": "required|integer",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const graduateValidate = async(req, res, next) => {
    const validationRule = {
        "higher_institute_id": "required|string",
        "studyfield_id": "required|string",
        "study_program": "required|string",
        "studylevel_id": "required|string",
        "study_period": "required|date",
        "gender": "required|string",
        "agelevel_id": "required|string",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const constructionRelatedServiceValidate = async(req, res, next) => {
    const validationRule = {
        "stakeholder_id": "required|string",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}
const projectTypeValidate = async(req, res, next) => {
    const validationRule = {
        "title": "required|string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    error: err.errors,
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
    stakeholderSubCategoryValidate,
    userPhotoValidate,
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
    studyPeriodCostValidate,
    constructionRelatedServiceValidate,
    graduateValidate,

};