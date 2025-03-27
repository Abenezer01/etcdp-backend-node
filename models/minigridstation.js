'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MiniGridStation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MiniGridStation.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    substation_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minigrid_size: DataTypes.DOUBLE,
    battery_type_id: DataTypes.UUID,
    battery_size: DataTypes.DOUBLE,
    inverter: DataTypes.DOUBLE,
    system_voltage: DataTypes.DOUBLE,
    expected_annual_generation: DataTypes.DOUBLE,
    diesel_generator: {
      type: DataTypes.ENUM('Equipped', 'Not Equipped'),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Not Equipped', // Default value
    },
    owner_operator: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'MiniGridStation',
    tableName: 'MiniGridStations',
  });
  return MiniGridStation;
};