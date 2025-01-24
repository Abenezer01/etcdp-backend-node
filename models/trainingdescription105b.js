'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainingDescription105B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrainingDescription105B.init({
    target_trainees: DataTypes.STRING,
    curriculum: DataTypes.STRING,
    certification: DataTypes.STRING,
    success_rate: DataTypes.STRING,
    number_of_trainees: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'TrainingDescription105B',
      tableName: 'TrainingDescription105Bs',
  });
  return TrainingDescription105B;
};