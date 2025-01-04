'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SystemConditionAssessment98D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SystemConditionAssessment98D.init({
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
    inspection_dates: DataTypes.DATE,
    system_condition_rating: DataTypes.STRING,
    presence_of_defects: DataTypes.BOOLEAN,
    system_performance_indicators: DataTypes.STRING,
    power_supply_systems: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SystemConditionAssessment98D',
  });
  return SystemConditionAssessment98D;
};