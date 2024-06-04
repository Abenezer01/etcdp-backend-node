"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StakeholderStudyField extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderStudyField.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      stakeholder_id: DataTypes.UUID,
      studyfield_id: DataTypes.UUID,
      studyprogram_id: DataTypes.UUID,
      studylevel_id: DataTypes.UUID,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "StakeholderStudyField",
      tableName: "stakeholderstudyfields"
    }
  );

  StakeholderStudyField.associate = function (models) {
    StakeholderStudyField.belongsTo(models.StudyField, {
      as: "studyfield",
      foreignKey: "studyfield_id",
    });
    StakeholderStudyField.belongsTo(models.StudyProgram, {
      as: "studyprogram",
      foreignKey: "studyprogram_id",
    });
    StakeholderStudyField.belongsTo(models.StudyLevel, {
      as: "studylevel",
      foreignKey: "studylevel_id",
    });
  };
  return StakeholderStudyField;
};
