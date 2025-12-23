'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeAreaData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BridgeAreaData.belongsTo(models.BridgeBasicData, {
        foreignKey: 'bridge_id',
        as: 'bridge'
      })
    }
  }
  BridgeAreaData.init({
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
    bridge_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    river_width: DataTypes.DOUBLE,
    highest_water_level: DataTypes.DOUBLE,
    lowest_water_level: DataTypes.DOUBLE,
    area_topography_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    detour_possibility: DataTypes.BOOLEAN,
    road_alignment: DataTypes.STRING,
    altitude: DataTypes.DOUBLE,
    load_limit_sign: DataTypes.BOOLEAN
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'BridgeAreaData',
    tableName: 'BridgeAreaData',
  });
  return BridgeAreaData;
};