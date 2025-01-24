'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FacilityCapacityAndSecurityMeasures64F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FacilityCapacityAndSecurityMeasures64F.init({
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
    total_floor_area: DataTypes.DOUBLE,
    power_capacity: DataTypes.DOUBLE,
    rack_space_capacity: DataTypes.INTEGER,
    access_control: DataTypes.BOOLEAN,
    surveillance_cameras: DataTypes.BOOLEAN,
    fire_suppression: DataTypes.BOOLEAN,
    intrusion_detection_systems: DataTypes.BOOLEAN
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'FacilityCapacityAndSecurityMeasures64F',
      tableName: 'FacilityCapacityAndSecurityMeasures64Fs',
  });
  return FacilityCapacityAndSecurityMeasures64F;
};