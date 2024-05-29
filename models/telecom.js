"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Telecom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Telecom.init(
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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      specifications: DataTypes.TEXT,
      coverage_area: DataTypes.DOUBLE,
      no_of_families_coverage: DataTypes.DOUBLE,
      service_period: DataTypes.DATE,
      inauguration_date: DataTypes.DATE,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Telecom",
    }
  );
  return Telecom;
};
