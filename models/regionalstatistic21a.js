'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RegionalStatistic21A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RegionalStatistic21A.init({
    organization_id: DataTypes.STRING,
    department: DataTypes.STRING,
    age_group_id: DataTypes.STRING,
    address_level_id: DataTypes.STRING,
    region_name: DataTypes.STRING,
    professional_level: DataTypes.STRING,
    male: DataTypes.STRING,
    female: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RegionalStatistic21A',
  });
  return RegionalStatistic21A;
};