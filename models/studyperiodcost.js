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
      StudyPeriodCost.belongsTo(models.StakeholderStudyField, {
        as: "stakeholderstudyfield",
        foreignKey: "stakeholderstudyfield_id",
        constraints: false,
        attribute: ["description", "title"],
      });
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
      stakeholder_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      stakeholderstudyfield_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
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
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "StudyPeriodCost",
      tableName: "studyperiodcosts"
    }
  );
  return StudyPeriodCost;
};
