'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeterPerformanceMaintenance76B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MeterPerformanceMaintenance76B.init({
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
    average_meter_lifespan: DataTypes.INTEGER,
    average_meter_accuracy: DataTypes.STRING,
    safety_problems_encountered: DataTypes.STRING,
    number_of_work_accidents: DataTypes.INTEGER,
    on_site_safety_measures: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'MeterPerformanceMaintenance76B',
      tableName: 'MeterPerformanceMaintenance76Bs',
  });
  return MeterPerformanceMaintenance76B;
};