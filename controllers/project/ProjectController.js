const { saveActionState, getChildren } = require("../../utils/helper");
const {
    project,
    actionstate,
    Sequelize
} = require("./../../models");

const Op = Sequelize.Op;

let self = {};
const paginate = require("../../utils/pagination");
const dotenv = require('dotenv');
dotenv.config();

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
    const { limit, offset } = paginate.getPagination(page, size);
    project.findAndCountAll({
            limit,
            offset,
            order: [
                ['createdAt', order]
            ],
        })
        .then(data => {
            const response = paginate.getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
    // try {
    //     let data = await project.findAll();
    //     return res.json(data)

    // } catch (error) {
    //     res.status(500).json({
    //         message: error.message
    //     })
    // }
}





self.getAll = async(req, res) => {
    try {

        //test
        let us = {
            id: "e1594d67-3aa2-429b-bb77-2e4ecc2124f8",
            department_id: "5ba1e51c-469f-4487-bc44-e9c986aded73"
        }
        let department_id = us.department_id

        let exist = await getChildren(department_id)

        let other = await project.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                department_id: {
                    [Op.in]: exist
                }
            },

        })

        let mine = await project.findAll({
            where: {
                department_id
            }
        })

        let otherArr = []
        for (let da of other) {
            let action = await actionstate.findOne({
                where: {
                    model_id: da.id,
                    action: "APPROVE"
                }
            })
            if (action) {
                otherArr.push(da)
            }
        }

        let data = mine.concat(otherArr)
        return res.json(data)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
self.getArr = async(arr) => {
    try {
        const otherArr = await Promise.all(arr.map(async da => {
            const action = await actionstate.findOne({
                where: {
                    model_id: da.id,
                    action: "APPROVE"
                }
            })

            if (action) return da;
        }));

        return otherArr.filter(x => x);
    } catch (error) {
        return {
            message: error.message
        }
    }
}



self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await project.findOne({
            where: {
                id: id
            }
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

self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await project.findAll({
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
        let body = req.body;
        let data = await project.create(body);



        if (data) {
            let us = "e1594d67-3aa2-429b-bb77-2e4ecc2124f8"
            saveActionState(data.id, "project", "REGISTER", us)
        }


        return res.json(data)
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
        let data = await project.update(body, {
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
        let data = await project.destroy({
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


module.exports = self;