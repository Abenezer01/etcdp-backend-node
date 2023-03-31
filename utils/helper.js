const {
    department,
    sequelize
} = require("../models");

const { actionstate} = require("../models/actionstate")
const usrData = require("./userDataFromToken");
const crypto = require('crypto');

const saveActionState = async (model_id, model, action, user_id, req, res) => {
    try {

        let usr = await usrData.userData(req, res) 
        let act =  await actionstate.create({
                model_id,
                model,
                action, 
                user_id: usr.usrID, 
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



const getChildren = async(id) => {

    let firstFam = await department.findAll({
        where: {
            parent_department_id: id
        }
    })
    let children = []
    console.log("1st output", firstFam)
    children.push(...firstFam.map((item) => item.id))

    let x = await getAllChildren(firstFam)
    console.log("2nd output", x)
    return children.concat(x)

}

const getAllChildren = async(arr) => {
        let children = []
        if (arr.length > 0) {
            let promiseArr = []
            for (let i = 0; i < arr.length; i++) {
                promiseArr.push(department.findAll({
                    where: {
                        parent_department_id: arr[i].id
                    }
                }))
            }
            let dd = await Promise.all(promiseArr)
            console.log("3rd output", dd)
            dd.forEach(d => {
                if (d.length > 0) {
                    let filtered = d.map((item) => item.id)
                    children = children.concat(filtered)
                    getAllChildren(d)
                }
            })
        }
        return children;
    }
   
const algorithm = 'aes-256-cbc';
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

const key = crypto
  .createHash('sha512')
  .update("secret_key")
  .digest('hex')
  .substring(0, 32)
const encryptionIV = crypto
  .createHash('sha512')
  .update("secret_iv")
  .digest('hex')
  .substring(0, 16)
  

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, key, encryptionIV)
    return Buffer.from(
        cipher.update(text, 'utf8', 'hex') + cipher.final('hex')
    ).toString('base64')
}

const decrypt  = (encrypted) =>{

    const buff = Buffer.from(encrypted, 'base64')
    const decipher = crypto.createDecipheriv(algorithm, key, encryptionIV)
    return (
        decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
        decipher.final('utf8')
    ) //
}

module.exports = {
    saveActionState,
    getAllChildren,
    getChildren,
    encrypt,
    decrypt 
    // filteredData
}