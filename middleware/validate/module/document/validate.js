const validateReply = require('../../../../utils/validateerror');

const documentValidate = async(req, res, next) => {
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
    const array_of_allowed_files = ['pdf'];
    const ext = req.files.upload.mimetype.split("/")[1];

    // Check if the uploaded file is allowed
    if (!array_of_allowed_files.includes(ext)) {
        // throw Error('Invalid file');
        return res.status(412)
            .send({
                success: false,
                message: 'File must be pdf',
                data: "Invalid file"
            });
    }
    const validationRule = {
        "type": "required|string"
    };

    await validateReply.validateReply(req.body, validationRule, res, next)


}
const filterValidate = async(req, res, next) => {
    // let param = await validateReply.checkParam(req, res, next)
    // if (param == "failed") {
    //     return res.status(400).json({
    //         message: "Invalid id"
    //     })
    // }
    let id = req.query.id
    let projectType = req.query.project_type

    //console.log("Hey", id, projectType)
    if (!id) {
        return res.status(412).json({
            message: "Validation error, Please put id"
        })
    } else if (!projectType) {
        return res.status(412).json({
            message: "Validation error, Please put project type"
        })
    } else {
        next();
    }

}
module.exports = {
    documentValidate,
    filterValidate
};