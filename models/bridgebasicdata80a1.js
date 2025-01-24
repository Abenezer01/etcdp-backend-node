'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeBasicData80A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BridgeBasicData80A1.init({
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
    bridge_length: DataTypes.DOUBLE,
    bridge_width: DataTypes.DOUBLE,
    river_width: DataTypes.DOUBLE,
    present_water_level: DataTypes.DOUBLE,
    highest_water_level: DataTypes.DOUBLE,
    area_topography: DataTypes.STRING,
    year_of_construction: DataTypes.INTEGER,
    cost_of_bridge: DataTypes.DOUBLE,
    load_capacity: DataTypes.DOUBLE,
    average_daily_traffic: DataTypes.DOUBLE,
    detour_possibility: DataTypes.INTEGER,
    road_alignment: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'BridgeBasicData80A1',
      tableName: 'BridgeBasicData80A1s'
  });
  return BridgeBasicData80A1;
};