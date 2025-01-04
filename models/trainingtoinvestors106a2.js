'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainingToInvestors106A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrainingToInvestors106A2.init({
    type_id: DataTypes.UUID,
    number_of_trainees: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TrainingToInvestors106A2',
  });
  return TrainingToInvestors106A2;
};