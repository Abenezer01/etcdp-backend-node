'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnvironmentalAndSocialImpact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnvironmentalAndSocialImpact.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    environmental_impact_assessment_conducted: DataTypes.BOOLEAN,
    mitigation_measures_implemented: DataTypes.BOOLEAN,
    social_impact_assessment_conducted: DataTypes.BOOLEAN,
    resettlement_and_compensation_measures_implemented: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'EnvironmentalAndSocialImpact',
    tableName: 'EnvironmentalAndSocialImpacts',
  });
  return EnvironmentalAndSocialImpact;
};