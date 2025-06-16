'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ElectricSmartMetersPrivacyAndSecurityData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ElectricSmartMetersPrivacyAndSecurityData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    electric_smart_meters_data_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    privacy_measures_implemented: DataTypes.BOOLEAN,
    privacy_measures_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    customer_engagement_frequency_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    customer_engagement_programs_implemented: DataTypes.BOOLEAN,
    customer_engagement_programs_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    social_impact_assessment_conducted: DataTypes.BOOLEAN,
    resettlement_and_compensation_measures_implemented: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'ElectricSmartMetersPrivacyAndSecurityData',
    tableName: 'ElectricSmartMetersPrivacyAndSecurityData',
  });
  return ElectricSmartMetersPrivacyAndSecurityData;
};