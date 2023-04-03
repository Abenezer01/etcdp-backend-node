const {
    actionstate
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const crypto = require('crypto');
const self={}
self.saveActionState = async (model_id, model, action, user_id, req, res) => {
    try {


        let usr = await usrData.userData(req, res) 
        const act = await actionstate.create({
                    model_id,
                    model,
                    action, 
                    user_id: user_id, 
                    position_id: usr.position_id,
                    time: new Date()
                })
        return act

    } catch (error) {
        return {
            message: error.message
        }
    }
}
module.exports=self