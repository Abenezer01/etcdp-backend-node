"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Graduate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Graduate.belongsTo(models.StudyField, {
        as: "studyfield",
        foreignKey: "studyfield_id",
      });
      Graduate.belongsTo(models.StudyProgram, {
        as: "studyprogram",
        foreignKey: "study_program_id",
      });
      Graduate.belongsTo(models.StudyLevel, {
        as: "studylevel",
        foreignKey: "studylevel_id",
      });
      Graduate.belongsTo(models.StudyPeriodCost, {
        as: "studyperiod",
        foreignKey: "study_period_id",
      });
      Graduate.belongsTo(models.AgeLevel, {
        as: "agelevel",
        foreignKey: "agelevel_id",
      });
    }
  }
  Graduate.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      higher_institute_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      stake_study_field_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      study_program_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      studylevel_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      study_period_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      studyfield_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      male: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      female: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      year: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      agelevel_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "Graduate",
      tableName: "graduates"
    }
  );
  return Graduate;
};
