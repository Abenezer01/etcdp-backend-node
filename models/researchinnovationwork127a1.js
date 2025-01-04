'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResearchInnovationWork127A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResearchInnovationWork127A1.init({
    date_collected: DataTypes.DATE,
    title: DataTypes.STRING,
    reference_id: DataTypes.STRING,
    ip_owner_name: DataTypes.STRING,
    category: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ResearchInnovationWork127A1',
  });
  return ResearchInnovationWork127A1;
};