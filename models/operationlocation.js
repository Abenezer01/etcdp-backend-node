"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class operationlocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  operationlocation.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      stakeholder_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      country: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "operationlocation",
    }
  );
  //   operationlocation.associate = function (models) {
  //     operationlocation.belongsTo(models.studyfield, {
  //       as: "studyfield",
  //       foreignKey: "studyfield_id",
  //     });
  //     operationlocation.belongsTo(models.studyprogram, {
  //       as: "studyprogram",
  //       foreignKey: "study_program_id",
  //     });
  //     operationlocation.belongsTo(models.studylevel, {
  //       as: "studylevel",
  //       foreignKey: "studylevel_id",
  //     });
  //     operationlocation.belongsTo(models.studyperiodcost, {
  //       as: "studyperiod",
  //       foreignKey: "study_period_id",
  //     });
  //     operationlocation.belongsTo(models.agelevel, {
  //       as: "agelevel",
  //       foreignKey: "agelevel_id",
  //     });
  //   };
  return operationlocation;
};
