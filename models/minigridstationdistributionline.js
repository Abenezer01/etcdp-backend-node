'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MiniGridStationDistributionLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MiniGridStationDistributionLine.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    mini_grid_station_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    system_type: DataTypes.STRING,
    lines_type: DataTypes.STRING,
    line_length: DataTypes.DOUBLE,
    poles: {
      type: DataTypes.ENUM('Concrete', 'Wood', "Steel"),
      allowNull: false, // Ensures it's always set
      defaultValue: 'Concrete', // Default value
    },
    transformer_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    transformers_number: DataTypes.INTEGER,
    transformers_size: DataTypes.DOUBLE,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'MiniGridStationDistributionLine',
    tableName: 'MiniGridStationDistributionLines',
  });
  return MiniGridStationDistributionLine;
};