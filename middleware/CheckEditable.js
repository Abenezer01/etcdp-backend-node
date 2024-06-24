const { ActionState } = require("../models");
const checkEditability = async (req, res, next) => {
    const id = req.params.id;
    let data = await ActionState.findOne({
        where: {
            model_id: id,
            action: "CHECK"
        }
    });

    if(data){
        return res.status(500).json({
            message: "You can not update this data, It is already checked!"
        });
    }
    next();
};
module.exports = {
    checkEditability,
};
