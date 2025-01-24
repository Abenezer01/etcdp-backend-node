'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnvironmentalSocialImpact65G extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnvironmentalSocialImpact65G.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    environmental_assessment_conducted: DataTypes.BOOLEAN,
    mitigation_measures_implemented: DataTypes.BOOLEAN,
    social_assessment_conducted: DataTypes.BOOLEAN,
    resettlement_measures_implemented: DataTypes.BOOLEAN
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'EnvironmentalSocialImpact65G',
      tableName: 'EnvironmentalSocialImpact65Gs',
  });
  return EnvironmentalSocialImpact65G;
};