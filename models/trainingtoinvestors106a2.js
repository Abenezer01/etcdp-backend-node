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
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'TrainingToInvestors106A2',
      tableName: 'TrainingToInvestors106A2s',
  });
  return TrainingToInvestors106A2;
};