"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MonthlyReport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MonthlyReport.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: {
        type: DataTypes.UUID,
      },
      project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      year: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quarter: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_submitted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      revised: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "MonthlyReport",
    }
  );
  return MonthlyReport;
};
