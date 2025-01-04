'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConstructionBestPracticeAward123A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConstructionBestPracticeAward123A.init({
    award_name: DataTypes.STRING,
    category: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    recipient: DataTypes.STRING,
    supporting: DataTypes.STRING,
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ConstructionBestPracticeAward123A',
  });
  return ConstructionBestPracticeAward123A;
};