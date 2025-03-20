'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RegulationAndPolicy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RegulationAndPolicy.init({
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
    regulatory_body_overseeing_the_facility: DataTypes.STRING,
    regulatory_compliance_monitoring: DataTypes.BOOLEAN,
    environmental_and_social_regulation_compliance_monitoring: DataTypes.BOOLEAN,
    licensing_and_permit_requirements: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RegulationAndPolicy',
    tableName: 'RegulationAndPolicies',
  });
  return RegulationAndPolicy;
};