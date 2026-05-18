"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EducationStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EducationStatus.belongsTo(models.StakeholderMasterData, {
        foreignKey: "study_field_id",
        as: "studyField"
      })
      EducationStatus.belongsTo(models.StakeholderMasterData, {
        foreignKey: "study_level_id",
        as: "studyLevel"
      })
    }
  }
  EducationStatus.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      study_field_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      school_name: DataTypes.STRING,
      study_level_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      program_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      gpa: {
        type: DataTypes.DOUBLE,
        allowNull: false
      }
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "EducationStatus",
      tableName: "EducationStatuses"
    }
  );
  return EducationStatus;
};
