"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OperationLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OperationLocation.init(
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
      modelName: "OperationLocation",
      tableName: "operationlocations"
    }
  );
  //   OperationLocation.associate = function (models) {
  //     OperationLocation.belongsTo(models.studyfield, {
  //       as: "studyfield",
  //       foreignKey: "studyfield_id",
  //     });
  //     OperationLocation.belongsTo(models.studyprogram, {
  //       as: "studyprogram",
  //       foreignKey: "study_program_id",
  //     });
  //     OperationLocation.belongsTo(models.studylevel, {
  //       as: "studylevel",
  //       foreignKey: "studylevel_id",
  //     });
  //     OperationLocation.belongsTo(models.studyperiodcost, {
  //       as: "studyperiod",
  //       foreignKey: "study_period_id",
  //     });
  //     OperationLocation.belongsTo(models.agelevel, {
  //       as: "agelevel",
  //       foreignKey: "agelevel_id",
  //     });
  //   };
  return OperationLocation;
};
