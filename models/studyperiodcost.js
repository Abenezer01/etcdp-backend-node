"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class studyperiodcost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  studyperiodcost.init(
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
      modelName: "studyperiodcost",
    }
  );
  studyperiodcost.associate = function (models) {
    studyperiodcost.belongsTo(models.stakeholderstudyfield, {
      as: "stakestudyfield",
      foreignKey: "stake_study_field_id",
      constraints: false,
      attribute: ["description", "title"],
    });
    studyperiodcost.belongsTo(models.studyprogram, {
      as: "studyprogram",
      foreignKey: "study_program_id",
    });
    studyperiodcost.belongsTo(models.studylevel, {
      as: "studylevel",
      foreignKey: "studylevel_id",
    });
    studyperiodcost.belongsTo(models.studyfield, {
      as: "studyfield",
      foreignKey: "studyfield_id",
    });
  };
  return studyperiodcost;
};
