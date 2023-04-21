const { actionstate } = require("../../models");
const self = {};

self.checkEditable = async (model_id) => {
  try {

    let data = await actionstate.findOne({
        where: {
            model_id: model_id,
            action: "CHECK"
        }
    })

    if(data){
        return res.json({
            message: "You can not update this data, It is already checked!"
        })
    }

  } catch (error) {
    return {
      message: error.message,
    };
  }
};
module.exports = self;
