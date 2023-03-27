const {
    stakeholder,
    actionstate,
    department,
    sequelize,
    Sequelize
} = require("./../../models");
const jwt = require("jsonwebtoken");
const paginate = require("../../utils/pagination");
const usrData = require("../../utils/userDataFromToken");
const dotenv = require('dotenv');
dotenv.config();


const { saveActionState, getChildren } = require('../../utils/helper');

const Op = Sequelize.Op;

let self = {};

self.getAll = async(req, res) => {

    let { page, size, order } = req.query;
    //console.log("The page", page, size)
    if (page == null && size == null) {
        page = process.env.page,
            size = process.env.size
    }
    if (order == null) {
        order = process.env.order
    }
    const { limit, offset } = paginate.getPagination(Number(page), Number(size));
    try {
        let usr = await usrData.userData(req, res)
            // let us = req.decoded	
        let us = {
            id: "e1594d67-3aa2-429b-bb77-2e4ecc2124f8",
            department_id: usr.departmentID
        }


        let department_id = us.department_id

        let exist = await getChildren(department_id)
        console.log("The exist", exist)
        let other = await stakeholder.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                department_id: {
                    [Op.in]: exist
                }
            },

        })
        let mine = await stakeholder.findAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
            where: {
                department_id
            }
        })

        let otherArr = []
        console.log("The other is", other)
        for (let da of other) {
            let action = await actionstate.findOne({
                where: {
                    model_id: da.id,
                    action: "APPROVE"
                }
            })
            if (action) {
                otherArr.push(da)
                console.log("Other array", otherArr)
            }
        }

        let data = mine.concat(otherArr)
        paginate.getPagingData(data, page, limit);
        return res.json(data)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
    // if (order == null) {
    //     order = process.env.order
    // }
    // const { limit, offset } = paginate.getPagination(page, size);
    // stakeholder.findAndCountAll({
    //         limit,
    //         offset,
    //         order: [
    //             ['createdAt', order]
    //         ],
    //     })
    //     .then(data => {
    //         const response = paginate.getPagingData(data, page, limit);
    //         res.send(response);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message: err.message || "Some error occurred while retrieving data."
    //         });
    //     });













}
self.getStakeholders = async(req, res) => {
    const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;

    let { limit, offset } = paginate.getPagination(page, size);
    let limiter = { limit, offset }
    page == -1 ? limiter = {} : limiter
    try {
        const { rows, count } = await stakeholder.findAndCountAll({
            limiter,
            //include: ["staketype", "stakecategory"],
            attributes: ["id", "trade_name"],
            order: [
                ['createdAt', order]
            ]

        });

        const response = paginate.getPagingData({ rows, count }, page, limit, count);

        res.send(response);
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: 'An error occurred while retrieving data.',
        });
    }
}
self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await stakeholder.findOne({
            where: {
                id: id
            },
            include: ["staketype", "stakecategory", "stakesubcategory", "ownership", "businessfield"]
        });
        return res.status(200).json({
            data: (data) ? data : {}
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
self.getStakeHolderByTypeId = async(req, res) => {
    const { page = process.env.page, size = process.env.size, order = process.env.order } = req.query;
    const { typeId, categoryId, subcategoryId } = req.body;



    const filter = subcategoryId ? [{ stakeholdertype_id: typeId }, { stakecategory_id: categoryId }, { stakesubcategory_id: subcategoryId }] :
        categoryId ? [{ stakeholdertype_id: typeId }, { stakecategory_id: categoryId }] : [{ stakeholdertype_id: typeId }];

    const { limit, offset } = paginate.getPagination(page, size);

    try {
        const data = await stakeholder.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
            where: {
                [Op.and]: filter
            },
        });

        const response = paginate.getPagingData(data, page, limit);
        res.send(response);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving data." });
    }
}


self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await stakeholder.findAll({
            where: {
                name: {
                    [Op.like]: "%" + text + "%"
                }
            }
        });
        return res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.save = async(req, res) => {
    try {
        let usr = await usrData.userData(req, res)
        let body = req.body;
        if (usr) {
            req.body.department_id = usr.departmentID
            let data = await stakeholder.create(body);
            if (data) {
                let usrID = usr.usrID
                saveActionState(data.id, "stakeholder", "REGISTER", usrID, req, res)
            }
            return res.json(data)
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.update = async(req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        let data = await stakeholder.update(body, {
            where: {
                id: id
            }
        });
        return res.status(200).json({
            message: "Success"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

self.delete = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await stakeholder.destroy({
            where: {
                id: id
            }
        });
        return res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
self.countAllStakeholderWithStakeType = async(req, res) => {

    try {
        let queryTypeString = "SELECT stakeholdertypes.title AS type,stakeholdertypes.id AS typeID, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakeholdertypes LEFT JOIN stakeholders ON stakeholdertypes.id = stakeholders.stakeholdertype_id GROUP BY stakeholdertypes.title;"
        let stakeTypeData = await sequelize.query(
            queryTypeString, { type: sequelize.QueryTypes.SELECT }
        );
        let queryCategoryString = "SELECT stakecategories.title AS category,stakecategories.stakeholdertype_Id AS typeID, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakecategories LEFT JOIN stakeholders ON stakecategories.id = stakeholders.stakecategory_id GROUP BY stakecategories.title,typeID;"
        let stakeCategoryData = await sequelize.query(
            queryCategoryString, { type: sequelize.QueryTypes.SELECT }
        );
        const Result = [];
        //return res.send(stakeTypeData)
        // loop through A
        for (let i = 0; i < stakeTypeData.length; i++) {
            const objA = stakeTypeData[i];
            const categories = [];

            // loop through B to find matching typeIDs
            for (let j = 0; j < stakeCategoryData.length; j++) {
                const objB = stakeCategoryData[j];

                if (objA.typeID === objB.typeID) {
                    categories.push({ category: objB.category, total: objB.total });
                }
            }

            // create new object with matching categories
            const newObj = {
                type: objA.type,
                total: objA.total,
                categories: categories
            };

            Result.push(newObj);
        }
        res.send(Result)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}
self.countAllStakeholderWithStakeCategory = async(req, res) => {

    try {
        let queryString = "SELECT stakecategories.title AS category, COALESCE(COUNT(stakeholders.id), 0) AS total FROM stakecategories LEFT JOIN stakeholders ON stakecategories.id = stakeholders.stakecategory_id GROUP BY stakecategories.title;"
        let stakeData = await sequelize.query(
            queryString, { type: sequelize.QueryTypes.SELECT }
        );

        res.send(stakeData)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}
module.exports = self;