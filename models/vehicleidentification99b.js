'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VehicleIdentification99B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VehicleIdentification99B.init({
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
    type: DataTypes.STRING,
    manufacturer_supplier: DataTypes.STRING,
    manufacture_year: DataTypes.INTEGER,
    ownership_detail: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'VehicleIdentification99B',
  });
  return VehicleIdentification99B;
};