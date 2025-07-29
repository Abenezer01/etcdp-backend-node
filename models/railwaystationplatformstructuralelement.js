'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayStationPlatformStructuralElement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayStationPlatformStructuralElement.init({
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
    railway_station_platform_layout_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    materials_used: DataTypes.STRING,
    roofing_type_and_design: DataTypes.STRING,
    lighting_fixtures: DataTypes.BOOLEAN,
    accessibility_features: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,  
    sequelize,
    modelName: 'RailwayStationPlatformStructuralElement',
    tableName: 'RailwayStationPlatformStructuralElements',
  });
  return RailwayStationPlatformStructuralElement;
};