'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accessory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Accessory.init({
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    under_passes: DataTypes.INTEGER,
    ramps: DataTypes.INTEGER,
    traffic_signals: DataTypes.INTEGER,
    repair_stations: DataTypes.INTEGER,
    bicycle_lanes: DataTypes.BOOLEAN,
    bicycle_signals: DataTypes.INTEGER,
    culvert: DataTypes.BOOLEAN,
    bridge: DataTypes.BOOLEAN
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'Accessory',
    tableName: 'Accessories',
  });
  return Accessory;
};