'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectDetail126C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectDetail126C.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    required_machinery_name: DataTypes.STRING,
    collateral_detail: DataTypes.TEXT,
    expected_start_date: DataTypes.DATE,
    expected_end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ProjectDetail126C',
  });
  return ProjectDetail126C;
};