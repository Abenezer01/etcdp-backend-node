'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Training12A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Training12A2.init({
    organization_id: DataTypes.STRING,
    title: DataTypes.STRING,
    duration: DataTypes.STRING,
    year_of_completion: DataTypes.INTEGER
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'Training12A2',
      tableName: 'Training12A2s',
  });
  return Training12A2;
};