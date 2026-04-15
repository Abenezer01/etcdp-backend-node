'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReliabilityAndMaintenance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReliabilityAndMaintenance.init({
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
    maintenance_frequency_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    total_outage_duration: DataTypes.DOUBLE,
    total_interruption_number: DataTypes.INTEGER,
    saidi: DataTypes.DOUBLE,
    saifi: DataTypes.DOUBLE,
    automatic_fault_detection_restoration_system_installed: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'ReliabilityAndMaintenance',
    tableName: 'ReliabilityAndMaintenances',
  });
  return ReliabilityAndMaintenance;
};