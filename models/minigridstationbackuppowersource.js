'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MiniGridStationBackupPowerSource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MiniGridStationBackupPowerSource.init({
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
    capacity: DataTypes.DOUBLE,
    installation_year: DataTypes.INTEGER,
    distribution_lines_total_length: DataTypes.DOUBLE,
    lifetime: DataTypes.INTEGER,
    commissioning_date: DataTypes.DATE,
    other: DataTypes.TEXT,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'MiniGridStationBackupPowerSource',
    tableName: 'MiniGridStationBackupPowerSources',
  });
  return MiniGridStationBackupPowerSource;
};