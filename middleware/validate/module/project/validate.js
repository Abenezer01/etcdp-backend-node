const validator = require('../../../../utils/validator');
const validateReply = require('../../../../utils/validateerror');

// const {
//     user
// } = require("../models");
const projectTypeValidate = async(req, res, next) => {
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
const projectCategoryValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "projecttype_id": "required|string",
        "title": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const projectSubCategoryValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "category_id": "required|string",
        "title": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const projectValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "projectcategory_id": "required|string",
        "projectsubcategory_id": "required|string",
        "name": "required|string",
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const statusValidate = async(req, res, next) => {
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
const projectStatusValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "status_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const projectStakeholderValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "stakeholder_id": "required|string",
        "title": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const projectFinanceValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const projectVariationValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "amount": "required|integer"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const projectTimeValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const projectBondValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "amount": "required|integer"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const projectPlanValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const projectDocumentValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string"
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
        "project_id": "required|string",
        "resource_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)

}
const buildingEnvelopMaterialValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const buildingDimensionDetailValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const roadDetailValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const roadSegmentValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "name": "required|string"

    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const roadLayerValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "segment_id": "required|string",
        "name": "required|string",
        "number": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const telecomValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "name": "required|string"

    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const generatingCapacityValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const turbineInfoValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "name": "required|string"

    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const hydroElectricDamValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "river_name": "required|string"

    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const spillWayInfoValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "name": "required|string"

    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const solarEnergyValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "title": "required|string"

    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const windEnergyValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "title": "required|string"

    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const transformerTypeValidate = async(req, res, next) => {
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
const transformerValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "transformertype_id": "required|string"

    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const transmissionLineValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "name": "required|string"

    };

    await validateReply.validateReply(req.body, validationRule, res, next)
}
const electricTowerValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "transmissionline_id": "required|string"

    };

    await validateReply.validateReply(req.body, validationRule, res, next)

}
const railWayValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "transmissionline_id": "required|string"

    };

    await validateReply.validateReply(req.body, validationRule, res, next)

}
const railWayStationValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "name": "required|string"

    };

    await validateReply.validateReply(req.body, validationRule, res, next)

}
const reserviorDetailValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)

}
const irrigationCapacityValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)

}
const waterIrrigationValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)

}
const portValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)

}
const paymentValidate = async(req, res, next) => {
    let param = await validateReply.checkParam(req, res, next)
    if (param == "failed") {
        return res.status(400).json({
            message: "Invalid id"
        })
    }
    const validationRule = {
        "project_id": "required|string",
        "amount": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)

}
module.exports = {
    projectBondValidate,
    projectCategoryValidate,
    projectDocumentValidate,
    projectFinanceValidate,
    projectPlanValidate,
    projectStakeholderValidate,
    projectStatusValidate,
    projectSubCategoryValidate,
    projectTimeValidate,
    projectTypeValidate,
    projectValidate,
    projectVariationValidate,
    constructionResourceValidate,
    buildingEnvelopMaterialValidate,
    buildingDimensionDetailValidate,
    roadDetailValidate,
    roadSegmentValidate,
    roadLayerValidate,
    telecomValidate,
    telecomValidate,
    generatingCapacityValidate,
    turbineInfoValidate,
    hydroElectricDamValidate,
    solarEnergyValidate,
    windEnergyValidate,
    transformerTypeValidate,
    transformerValidate,
    transmissionLineValidate,
    electricTowerValidate,
    railWayStationValidate,
    railWayValidate,
    reserviorDetailValidate,
    irrigationCapacityValidate,
    waterIrrigationValidate,
    portValidate,
    spillWayInfoValidate,
    statusValidate,
    paymentValidate
};