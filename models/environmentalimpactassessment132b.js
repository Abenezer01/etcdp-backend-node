'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnvironmentalImpactAssessment132B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnvironmentalImpactAssessment132B.init({
    eia_project_evaluation_id: DataTypes.UUID,
    eia_conducted: DataTypes.BOOLEAN,
    level_of_eia: DataTypes.STRING,
    date_of_eia_completion: DataTypes.DATE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'EnvironmentalImpactAssessment132B',
      tableName: 'EnvironmentalImpactAssessment132Bs',
  });
  return EnvironmentalImpactAssessment132B;
};