"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudyPeriodCost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudyPeriodCost.init(
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
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      study_program_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      studylevel_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      studyfield_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      total_month: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      study_cost: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "StudyPeriodCost",
      tableName: "studyperiodcosts"
    }
  );
  StudyPeriodCost.associate = function (models) {
    StudyPeriodCost.belongsTo(models.stakeholderstudyfield, {
      as: "stakestudyfield",
      foreignKey: "stake_study_field_id",
      constraints: false,
      attribute: ["description", "title"],
    });
    StudyPeriodCost.belongsTo(models.studyprogram, {
      as: "studyprogram",
      foreignKey: "study_program_id",
    });
    StudyPeriodCost.belongsTo(models.studylevel, {
      as: "studylevel",
      foreignKey: "studylevel_id",
    });
    StudyPeriodCost.belongsTo(models.studyfield, {
      as: "studyfield",
      foreignKey: "studyfield_id",
    });
  };
  return StudyPeriodCost;
};
