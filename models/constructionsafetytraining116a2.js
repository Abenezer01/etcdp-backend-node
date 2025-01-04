'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConstructionSafetyTraining116A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConstructionSafetyTraining116A2.init({
    id: DataTypes.UUID,
    safety_training_type_id: DataTypes.UUID,
    title: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ConstructionSafetyTraining116A2',
  });
  return ConstructionSafetyTraining116A2;
};