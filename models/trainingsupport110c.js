'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainingSupport110C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrainingSupport110C.init({
    id: DataTypes.STRING,
    organization_type: DataTypes.STRING,
    support_type: DataTypes.STRING,
    area_of_research: DataTypes.STRING,
    support_start_date: DataTypes.DATE,
    support_end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TrainingSupport110C',
  });
  return TrainingSupport110C;
};