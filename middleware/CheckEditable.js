const { actionstate } = require("../models");
const checkEditablity = async (req, res, next) => {
    const id = req.params.id;
    let data = await actionstate.findOne({
        where: {
            model_id: id,
            action: "CHECK"
        }
    })

    if(data){
        return res.json({
            message: "You can not update this data, It is already checked!"
        })
    }
    next();
};
module.exports = {
    checkEditablity,
};
