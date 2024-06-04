const { StakeholderPhone, Sequelize } = require('../../models');
const Op = Sequelize.Op;
const paginate = require('../../utils/pagination');
const dotenv = require('dotenv');
dotenv.config();
let self = {};
const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const paginationHelper = require("../utils/pagination-helper");


self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(StakeholderPhone, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    console.error("Error in getAll method:", error);
    res.apiError(error);
  }
};

self.getPrimaryphone = async (req, res) => {
  try {
    let id = req.query;
    let data = await StakeholderPhone.findOne({
      where: {
        [Op.and]: [{ stakeholder_id: id }, { is_primary: true }]
      }
    });
    return res.status(200).json({
      data: data ? data : {}
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await StakeholderPhone.findAll({
      where: {
        stakeholder_id: id
      }
    });
    return res.status(200).json({
      data: data ? data : []
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await StakeholderPhone.findAll({
      where: {
        name: {
          [Op.like]: '%' + text + '%'
        }
      }
    });
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

self.save = async (req, res) => {
  try {
    let usr = await usrData.userData(req, res);
    let body = req.body;
    if (usr) {
      const filteredArray = body.filter((item) => item.is_primary === true);

      if (filteredArray.length > 1) {
        return res.status(412).json({
          message: 'There is more than one element with is_primary true.'
        });
      }
      let filt = [];
      for (let dat of body) {
        const allData = await StakeholderPhone.findOne({
          where: {
            [Op.and]: [
              { stakeholder_id: dat.stakeholder_id },
              { phone: dat.phone },
              { is_primary: true }
            ]
          }
          // raw: true
        });
        //console.log(allData)
        if (allData) {
          filt.push(allData);
        }
      }
      let fr = [];
      const resu = await Promise.all(
        body.map(async (bodItem) => {
          const filteredDat = filt.find(
            (item) =>
              item.phone === bodItem.phone &&
              item.stakeholder_id === bodItem.stakeholder_id &&
              item.is_primary === bodItem.is_primary
          );
          if (filteredDat) {
            return filteredDat;
          }
        })
      );
      let removedNullResu = resu.find((item) => item != null);
      //return res.send(removedNullResu)
      if (removedNullResu) {
        return res.status(412).json({
          message:
            'There is already registered element with is_primary true data.'
        });
      }

      const fin = await Promise.all(
        body.map(async (item) => {
          let data = await StakeholderPhone.create(item);
          if (data) {
            await actionHelper.saveActionState(
              data.id,
              'StakeholderPhone',
              'REGISTER',
              usr.usrID,
              req,
              res
            );
          }

          return data.dataValues;
        })
      );

      return res.send(fin);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
self.update = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let data = await StakeholderPhone.update(body, {
      where: {
        id: id
      }
    });
    return res.status(200).json({
      message: 'Success'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

self.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await StakeholderPhone.destroy({
      where: {
        id: id
      }
    });
    return res.status(200).json({
      message: 'Success'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = self;
