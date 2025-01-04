'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization12A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Organization12A1.init({
    name: DataTypes.STRING,
    department: DataTypes.STRING,
    category: DataTypes.STRING,
    private_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organization12A1',
  });
  return Organization12A1;
};