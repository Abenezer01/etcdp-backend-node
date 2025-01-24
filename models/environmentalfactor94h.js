'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnvironmentalFactor94H extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnvironmentalFactor94H.init({
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
    compliance_measures: DataTypes.TEXT,
    impact_assessment: DataTypes.TEXT,
    method_used: DataTypes.STRING,
    document: DataTypes.STRING,
    assessment_recorder: DataTypes.STRING,
    assessment_date: DataTypes.DATE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'EnvironmentalFactor94H',
      tableName: 'EnvironmentalFactor94Hs',
  });
  return EnvironmentalFactor94H;
};