'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EIAOtherCriteria132D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EIAOtherCriteria132D.init({
    eia_project_evaluation_id: DataTypes.UUID,
    comprehensive_data_collection: DataTypes.BOOLEAN,
    comparison_and_analysis: DataTypes.TEXT,
    improved_transparency: DataTypes.BOOLEAN,
    support_for_policy_development: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'EIAOtherCriteria132D',
      tableName: 'EIAOtherCriteria132Ds',
  });
  return EIAOtherCriteria132D;
};