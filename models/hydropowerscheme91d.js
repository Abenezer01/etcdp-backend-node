'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HydropowerScheme91D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HydropowerScheme91D.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    type_of_development: DataTypes.STRING,
    dam_name: DataTypes.STRING,
    classification_of_development: DataTypes.STRING,
    plant_operation: DataTypes.STRING,
    number_of_turbines: DataTypes.INTEGER,
    turbine_capacity: DataTypes.DOUBLE,
    max_head: DataTypes.DOUBLE,
    installed_capacity: DataTypes.DOUBLE,
    overall_plant_efficiency: DataTypes.DOUBLE,
    plant_factor: DataTypes.DOUBLE,
    availability_factor: DataTypes.DOUBLE,
    annual_power_production: DataTypes.DOUBLE,
    powerhouse_location: DataTypes.STRING,
    availability_of_tunnel: DataTypes.BOOLEAN,
    tunnel_length: DataTypes.DOUBLE,
    tunnel_shape: DataTypes.STRING,
    main_transmission_line_capacity: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'HydropowerScheme91D',
      tableName: 'HydropowerScheme91Ds',
  });
  return HydropowerScheme91D;
};