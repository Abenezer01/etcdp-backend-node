'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayVehicleLoadAndCargoSpecification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayVehicleLoadAndCargoSpecification.init({
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
    railway_vehicle_identification_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    load_capacity_and_weight_limits: DataTypes.STRING,
    cargo_restrictions_or_special_requirements: DataTypes.STRING,
    coupling_and_uncoupling_procedures: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayVehicleLoadAndCargoSpecification',
    tableName: 'RailwayVehicleLoadAndCargoSpecifications',
  });
  return RailwayVehicleLoadAndCargoSpecification;
};