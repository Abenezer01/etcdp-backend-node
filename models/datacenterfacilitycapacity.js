'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataCenterFacilityCapacity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DataCenterFacilityCapacity.belongsTo(models.DataCenter, {
        foreignKey: "data_center_id",
        as: "datacenter"
      })
    }
  }
  DataCenterFacilityCapacity.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    data_center_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    total_floor_area: DataTypes.STRING,
    power_capacity: DataTypes.STRING,
    rack_space_capacity: DataTypes.STRING,
    cooling_capacity: DataTypes.STRING,
    access_control: DataTypes.BOOLEAN,
    surveillance_cameras: DataTypes.BOOLEAN,
    fire_suppression_systems: DataTypes.BOOLEAN,
    intrusion_detection_systems: DataTypes.BOOLEAN,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'DataCenterFacilityCapacity',
    tableName: 'DataCenterFacilityCapacities',
  });
  return DataCenterFacilityCapacity;
};