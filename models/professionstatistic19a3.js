'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfessionStatistic19A3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfessionStatistic19A3.init({
    organization_id: DataTypes.STRING,
    department: DataTypes.STRING,
    profession_id: DataTypes.STRING,
    address_level_id: DataTypes.STRING,
    professional_level: DataTypes.STRING,
    male: DataTypes.STRING,
    female: DataTypes.STRING,
    years_of_experience: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProfessionStatistic19A3',
  });
  return ProfessionStatistic19A3;
};