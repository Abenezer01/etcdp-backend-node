"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GeneratingCapacity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeneratingCapacity.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      operator: DataTypes.STRING,
      project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      commission_date: DataTypes.DATE,
      turbine_type_number: DataTypes.INTEGER,
      designed_capacity: DataTypes.STRING,
      generating_capacity: DataTypes.STRING,
      installed_capacity: DataTypes.STRING,
      capacity_factor: DataTypes.STRING,
      annual_generation: DataTypes.STRING,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "GeneratingCapacity",
    }
  );
  return GeneratingCapacity;
};
