const {
    actionstate,
    department,
    Sequelize
} = require("../models");
const Op = Sequelize.Op;

const saveActionState = async(model_id, model, action, user_id) => {
        let test = await actionstate.create({
            model_id,
            model,
            action,
            user_id,
            time: new Date(),
        })

        return test
    }
    // let children = []



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

module.exports = {
    saveActionState,
    getAllChildren,
    getChildren,
    // filteredData
}