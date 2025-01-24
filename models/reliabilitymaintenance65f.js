'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReliabilityMaintenance65F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReliabilityMaintenance65F.init({
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
    maintenance_frequency: DataTypes.STRING,
    total_outage_duration_per_year: DataTypes.DOUBLE,
    total_intrruptions_number_per_year: DataTypes.DOUBLE,
    saidi: DataTypes.DOUBLE,
    saifi: DataTypes.DOUBLE,
    automatic_fault_detection: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ReliabilityMaintenance65F',
      tableName: 'ReliabilityMaintenance65Fs',
  });
  return ReliabilityMaintenance65F;
};