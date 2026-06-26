
const {
  ActionState,
  Address,
  AgeLevel,
  Brand,
  BuildingDimensionDetail,
  BuildingEnvelopMaterial,
  BusinessField,
  Certificate,
  Child,
  ConstructionRelatedService,
  ConstructionResource,
  ConstructionResourceQuantityPrice,
  ContactPerson,
  Department,
  EducationStatus,
  ElectricTower,
  EmployeeAge,
  EmployeeEducation,
  ExperienceLevel,
  FamilyStatus,
  File,
  GeneratingCapacity,
  Graduate,
  HydroelectricDam,
  IrrigationCapacity,
  JobExperience,
  ModelMenu,
  Note,
  Ownership,
  Payment,
  Permission,
  Photo,
  Port,
  Position,
  PositionPermission,
  Project,
  ProjectBond,
  ProjectCategory,
  ProjectDocument,
  ProjectExtensionTime,
  ProjectFile,
  ProjectFinance,
  ProjectPlan,
  ProjectStakeholder,
  ProjectStatus,
  ProjectSubCategory,
  ProjectTime,
  ProjectType,
  ProjectUsedResource,
  ProjectVariation,
  Railway,
  RailwayStation,
  ReferenceDocument,
  Regulation,
  RegulationDocument,
  ResearchDocument,
  ReservoirInfo,
  Resource,
  ResourceCategory,
  ResourceDetailType,
  ResourceSubCategory,
  ResourceType,
  Reply,
  RoadInfo,
  RoadLayer,
  RoadSegment,
  Role,
  RolePermission,
  Salary,
  SolarEnergy,
  Specification,
  SpillwayInfo,
  StakeholderCategory,
  Stakeholder,
  StakeholderInfo,
  StakeholderService,
  StakeholderStudyField,
  StakeholderType,
  StakeholderSubCategory,
  Status,
  StudyField,
  StudyLevel,
  StudyPeriodCost,
  StudyProgram,
  Telecom,
  TotalEmployee,
  Training,
  Transformer,
  TransformerType,
  TransmissionLine,
  TransmissionType,
  TurbineInfo,
  User,
  UserEmail,
  UserPhone,
  UserPosition,
  WaterIrrigationDam,
  WindEnergy,
  WorkExperience,
  Sequelize,
} = require("../../models");
const models = require("../../models");
const notificationHelper = require("./notification-helper");
const Op = Sequelize.Op;

const self = {};
self.actionUserFinder = async (model, action, user_id, department_id) => {
  try {
    let pos = await Position.findAll({
      where: {
        department_id: department_id,
      },
    });

    let posIds = await Promise.all(
      pos.map(async (item) => {
        let per = Permission.findOne({
          where: {
            name: `${action}_${model}`,
          },
        });
        if (per) {
          let posper = PositionPermission.findOne({
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

    let userpos = await UserPosition.findAll({
      where: {
        position_id: {
          [Op.in]: posIds,
        },
      },
    });

    let userIds = userpos.map((item) => item.user_id).filter((n) => n);
    userIds = userIds.filter((element) => element !== user_id);

    return userIds;
  } catch (error) {
    return {
      message: error.message,
    };
  }
};

self.notifyActor = async (act, action, user_id, department_id) => {
  const targetModel = models[act.model];

  if (!targetModel) {
    throw new Error(`${act.model} is not defined`);
  }

  const modelvalue = await targetModel.findOne({
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
