"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class projecttime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projecttime.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      contract_signing_date: DataTypes.DATE,
      site_handover_date: DataTypes.DATE,
      mobilization_days_no: DataTypes.INTEGER,
      commencement_date: DataTypes.DATE,
      original_contract_duration: DataTypes.INTEGER,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "projecttime",
    }
  );
  return projecttime;
};
