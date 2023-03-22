const {
    actionstate,
    department,
    userposition,
    Sequelize
} = require("../models");
const usrData = require("./userDataFromToken");
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const Op = Sequelize.Op;

const saveActionState = async(model_id, model, action, user_id, req, res) => {
    try {
        let usr = await usrData.userData(req, res)
            //test

        // console.log("The position id is", usr.position_id)
        // return res.send(pos.id)
        await actionstate.create({
            model_id,
            model,
            action,
            user_id,
            position_id: usr.position_id,
            time: new Date(),
        })

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
    // const getAllChildren = async(arr) => {
    //     let children = []
    //     if(arr.length > 0){
    //         for(var i=0; i<arr.length; i++){
    //             let dd = await department.findAll({
    //                 where: {
    //                     parent_department_id: arr[i].id
    //                 }
    //             })
    //             if(dd.length > 0){
    //                 let filtered = dd.map((item)=> item.id)
    //                 children = [...filtered]
    //                 getAllChildren(dd)
    //             }
    //         }
    //     }
    // 	return children;
    // }


// const filteredData = async(id, model) => {

//     return "hello";
//     let firstFam = await d

// }

// const d = async(id, model) => {

//     let other = await eval(model).findAll({
//         order: [['createdAt', 'DESC']],
//         where: {
//             department_id: {
//                 [Op.in]: exist
//             }
//         },

//     })

//     let mine = await eval(model).findAll({
//         where: {
//             department_id:id
//         }
//     })

//     let otherArr = []
//     for(let da of other){
//         let action = await actionstate.findOne({
//             where: {
//                 model_id: da.id,
//                 action: "APPROVE"
//             }
//         })
//         if(action){
//             otherArr.push(da)
//         }
//     }

//     let data = [...mine, ...otherArr]
//     return data;
// }

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encrypt = async (text) => {

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted
}

const decrypt  = async(encrypted) =>{

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted
}

module.exports = {
    saveActionState,
    getAllChildren,
    getChildren,
    encrypt,
    decrypt 
    // filteredData
}