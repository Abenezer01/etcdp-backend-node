let hello = require("../../config/master");
const {
  actionstate,
  address,
  agelevel,
  brand,
  buildingdimensiondetail,
  buildingenvelopmaterial,
  businessfield,
  certificate,
  child,
  constructionrelatedservice,
  constructionresource,
  construtionresourcequantityprice,
  contactperson,
  department,
  educationstatus,
  electrictower,
  employeeage,
  employeeeducation,
  experiencelevel,
  familystatus,
  file,
  generatingcapacity,
  graduate,
  hydroelectricdam,
  irrigationcapacity,
  jobexperience,
  modelmenu,
  note,
  ownership,
  permission,
  photo,
  port,
  position,
  positionpermission,
  project,
  projectbond,
  projectcategory,
  projectdocument,
  projectfile,
  projectfinance,
  projectplan,
  projectstakeholder,
  projectstatus,
  projectsubcategory,
  projecttime,
  projecttype,
  projectusedresource,
  projectvariation,
  railway,
  railwaystation,
  referencedocument,
  regulation,
  regulationdocument,
  researchdocument,
  reservoirinfo,
  resource,
  resourcecategory,
  resourcedetailtype,
  resourcesubcategory,
  resourcetype,
  reply,
  roadinfo,
  roadlayer,
  roadsegment,
  role,
  rolepermission,
  solarenergy,
  specification,
  spillwayinfo,
  stakecategory,
  stakeholder,
  stakeholderinfo,
  stakeholderservice,
  stakeholderstudyfield,
  stakeholdertype,
  stakesubcategory,
  status,
  studyfield,
  studylevel,
  studyperiodcost,
  studyprogram,
  telecom,
  totalemployee,
  training,
  transformer,
  transformertype,
  transmissionline,
  transmissiontype,
  turbineinfo,
  user,
  useremai,
  userphone,
  userposition,
  waterirrigationdam,
  windenergy,
  workexperience,
  Sequelize,
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const notificationHelper = require("./notification-helper");
const Op = Sequelize.Op;

const self = {};
self.actionUserFinder = async (model, action, user_id, department_id) => {
  try {
    let pos = await position.findAll({
      where: {
        department_id: department_id,
      },
    });

    let posIds = await Promise.all(
      pos.map(async (item) => {
        let per = permission.findOne({
          where: {
            name: `${action}_${model}`,
          },
        });
        if (per) {
          let posper = positionpermission.findOne({
            where: {
              position_id: item.id,
              permission_id: per.id,
            },
          });

          if (posper) {
            return item.id;
          }
        }
      })
    );

    let userpos = await userposition.findAll({
      where: {
        position_id: {
          [Op.in]: posIds,
        },
      },
    });

    let userIds = userpos.map((item)=> item.user_id).filter(n=>n)
    userIds = userIds.filter(element => element !== user_id);

    return userIds;
  } catch (error) {
    return {
      message: error.message,
    };
  }
};

self.notifyActor = async (act, action, user_id, department_id) => {
  const modelvalue = await eval(act.model).findOne({
    where: {
      id: act.model_id,
    },
  });

  let userIds = await self.actionUserFinder(
    act.model,
    `${action}`,
    user_id,
    department_id
  );

  if (userIds.length) {
    let notifications = await Promise.all(
      userIds.map(async (usr) => {
        let ac = action.toUpperCase();
        return await notificationHelper.notify(
          `${ac}`,
          `Please ${action} data added on ${act.model}`,
          act.model,
          usr,
          modelvalue,
          `You are required to ${action} this data`
        );
      })
    );
    return notifications;
  } else {
    return [];
  }
};

module.exports = self;
