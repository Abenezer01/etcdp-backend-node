'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeBasicData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BridgeBasicData.belongsTo(models.RoadSegment, {
        foreignKey: 'road_segment_id',
        as: 'roadSegment'
      })
    }
  }
  BridgeBasicData.init({
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
    road_segment_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bridge_number: DataTypes.STRING,
    bridge_length: DataTypes.DOUBLE,
    bridge_width: DataTypes.DOUBLE,
    construction_year: DataTypes.INTEGER,
    contractor: DataTypes.STRING,
    designer: DataTypes.STRING,
    bridge_cost: DataTypes.DOUBLE,
    land_capacity: DataTypes.DOUBLE,
    average_daily_traffic: DataTypes.INTEGER
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'BridgeBasicData',
    tableName: 'BridgeBasicData',
  });
  return BridgeBasicData;
};