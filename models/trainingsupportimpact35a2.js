'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainingSupportImpact35A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrainingSupportImpact35A2.init({
    id: DataTypes.STRING,
    training_and_support_id: DataTypes.STRING,
    improve_business: DataTypes.BOOLEAN,
    increase_revenue: DataTypes.BOOLEAN,
    create_new_job: DataTypes.BOOLEAN,
    additional_comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TrainingSupportImpact35A2',
  });
  return TrainingSupportImpact35A2;
};