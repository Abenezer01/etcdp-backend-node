'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayVehicleIdentification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayVehicleIdentification.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    vehicle_identification_number: DataTypes.STRING,
    vehicle_type: DataTypes.STRING,
    manufacturer_supplier_name: DataTypes.STRING,
    manufacturer_supplier_address: DataTypes.STRING,
    manufacture_year: DataTypes.INTEGER,
    ownership_or_leasing_details: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayVehicleIdentification',
    tableName: 'RailwayVehicleIdentifications',
  });
  return RailwayVehicleIdentification;
};