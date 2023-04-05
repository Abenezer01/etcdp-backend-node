const { resource, image, Sequelize } = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const { saveActionState } = require("../../utils/helper");
const Op = Sequelize.Op;
const paginate = require("../../utils/pagination");
const dotenv = require("dotenv");
dotenv.config();
let self = {};

self.getAll = async(req, res) => {
    const {
        page = process.env.page,
            size = process.env.size,
            order = process.env.order,
    } = req.query;

    const { limit, offset } = paginate.getPagination(page, size);

    try {
        const { rows, count } = await resource.findAndCountAll({
            limit,
            offset,
            order: [
                ["createdAt", order]
            ],
        });

        const response = paginate.getPagingData({ rows, count },
            page,
            limit,
            count
        );

        res.send(response);
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "An error occurred while retrieving data.",
        });
    }
};

self.get = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await resource.findOne({
            where: {
                id: id,
            }
            //include: { model: image, as: "image", attributes: ["url"] },
        });
        return res.status(200).json({
            data: data ? data : {},
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

self.filter = async(req, res) => {
    const {
        page = process.env.page,
            size = process.env.size,
            order = process.env.order,
            typeId,
            categoryId,
            subcategoryId,
    } = req.query;
    const filter = [{ resourcetype_id: typeId }];
    if (categoryId) {
        filter.push({ resourcecategory_id: categoryId });
    }
    if (subcategoryId) {
        filter.push({ resourcesubcategory_id: subcategoryId });
    }
    const { limit, offset } = paginate.getPagination(page, size);
    try {
        const result = await resource.findAndCountAll({
            limit,
            offset,
            order: [
                ["createdAt", order]
            ],
            where: {
                [Op.and]: filter,
            },
        });
        const pagingData = paginate.getPagingData(result, page, limit);
        res.send(pagingData);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data.",
        });
    }
};

self.search = async(req, res) => {
    try {
        let text = req.query.text;
        let data = await resource.findAll({
            where: {
                name: {
                    [Op.like]: "%" + text + "%",
                },
            },
        });
        return res.json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

self.save = async(req, res) => {
    try {
        let usr = await usrData.userData(req, res);
        let body = req.body;
        if (usr) {
            let data = await resource.create(body);
            if (data) {
                let us = usr.usrID;
                data.department_id = us.departmentID;
                await data.save();
                await actionHelper.saveActionState(
                    data.id,
                    "resource",
                    "REGISTER",
                    us,
                    req,
                    res
                );
            }
            return res.json(data);
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

self.update = async(req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        let data = await resource.update(body, {
            where: {
                id: id,
            },
        });
        return res.status(200).json({
            message: "Success",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

self.delete = async(req, res) => {
    try {
        let id = req.params.id;
        let data = await resource.destroy({
            where: {
                id: id,
            },
        });
        return res.json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = self;