'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayStationPlatformLayout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayStationPlatformLayout.init({
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
    platforms_number: DataTypes.INTEGER,
    platform_configuration: DataTypes.STRING,
    platform_length: DataTypes.DOUBLE,
    platform_width: DataTypes.DOUBLE,
    accessibility_features: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,  
    sequelize,
    modelName: 'RailwayStationPlatformLayout',
    tableName: 'RailwayStationPlatformLayouts',
  });
  return RailwayStationPlatformLayout;
};