const {
    actionstate,
    Sequelize
} = require('../../models')

const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {
    try {
        let data = await actionstate.findAll();
        return res.status(200).json(data)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}



self.check = async(req, res) => {
    try {
        let id = req.params.id
        let model = req.params.model
        // let us = req.decoded
        let us = {
            id: "01983e21-f9cc-450a-986c-bb5fc910532b"
        }
        let data = await actionstate.findOne({
            where: {
                model_id: id,
                model:model,
                action: "CHECK"
            }
        })

        if(data){
            return res.status(400).json({
                message: 'already checked!'
            })
        }else{
            let action = await actionstate.findOne({
                where: {
                    model_id: id,
                    action: "REGISTER",
                    user_id: us.id
                }
            })

            if(action){
                return res.status(422).json({
                    message: 'You are not allowed to check the data as you are the register'
                })
            }else{
                await actionstate.create({
                    model_id:id,
                    model: model,
                    action: "CHECK",
                    user_id: us.id,
                    time: new Date()
                })
    
                return res.json({
                    message: "Data checked successfully"
                })
            }
        }

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
self.approve = async(req, res) => {
    try {
        let id = req.params.id 
        let model = req.params.model
        let us = {
            id: "f92e0cb7-9fe5-45f6-8efd-51462fe92d7a"
        }


        let data = await actionstate.findOne({
            where: {
                model_id: id,
                model:model,
                action: "APPROVE"
            }
        })
        if(data) {
            return res.status(400).json({
                message: "Already Approve!"
            })
        }else{
            let action = await actionstate.findAll({
                where: {
                    model_id: id,
                    action: {
                        [Op.in]: ['REGISTSER', 'CHECK']
                    },
                    user_id:us.id
                }
            })

            if(action.length != 0){
                return res.status(422).json({
                    message: 'You can not approve as you either register or check the data'
                })
            }else{
                actionstate.create({
                    model: (model).toLowerCase(),
                    model_id: id,
                    action: "APPROVE",
                    user_id: us.id,
                    time: new Date()
                })

                return res.status(200).json({
                    message: "Date approved successfully!"
                })
    
            }
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

self.reject = async(req, res) => {
    try {
        
        let id = req.params.id 
        let model = req.params.model 


        let data = await actionstate.findOne({
            where: {
                id:id,
                action: "REJECT"
            }
        })
        if(data){
            return res.status(400).json({
                message: "Already Rejected"
            })
        }else{ 
            let action = await actionstate.findAll({
                where: {
                    model_id: id,
                    action: {
                        [Op.in]: ['REGISTSER', 'CHECK', "APPROVE"]
                    },
                    user_id: us
                }
               
            })

            if(action.length != 0){
                return res.status(422).json({
                    message: 'You can not approve as you either register or check or approver the data'
                })
            }else{
                actionstate.create({
                    model: (model).toLowerCase(),
                    model_id: id,
                    action: "REJECT",
                    user_id: users.id,
                    time: new Date()
                })

                return res.status(200).json({
                    message: "Date rejected successfully!"
                })
    
            }
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


self.authorize = async(req, res) => {
    try {
        let id = req.params.id
        let model = req.params.model
        let us = req.decoded 

        let data = await actionstate.findOne({
            where: {
                model_id: id,
                action: "AUTHORIZE"
            }
        })

        if(data){
            return res.status(400).json({
                message: "Already Authorized"
            })
        }else{

            let action = await actionstate.findAll({
                model_id: id,
                action: {
                    [Op.in]: ['REGISTSER', 'CHECK', "APPROVE"]
                }
            })

            if(action.length != 0){
                return res.status(422).json({
                    message: 'You can not approve as you either register or check or approver the data'
                })
            }else{
                actionstate.create({
                    model: (model).toLowerCase(),
                    model_id: id,
                    action: "AUTHORIZE",
                    user_id: users.id,
                    time: new Date()
                })

                return res.status(200).json({
                    message: "Date authorized successfully!"
                })
    
            }
        }
    } catch (error) {
        return res.status(500).jdon({
            message: error.message
        })
    }
}
module.exports = self;