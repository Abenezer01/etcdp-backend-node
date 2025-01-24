'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvailableTrainingInformation105A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AvailableTrainingInformation105A1.init({
    training_type: DataTypes.STRING,
    training_provider: DataTypes.STRING,
    website: DataTypes.STRING,
    duration: DataTypes.STRING,
    training_fees: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'AvailableTrainingInformation105A1',
      tableName: 'AvailableTrainingInformation105A1s'
  });
  return AvailableTrainingInformation105A1;
};