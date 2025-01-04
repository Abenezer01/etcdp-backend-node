'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PrivacyAndSecurity76C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PrivacyAndSecurity76C.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    privacy_measures_implemented: DataTypes.BOOLEAN,
    type_of_privacy_measures: DataTypes.STRING,
    customer_engagement_frequency: DataTypes.STRING,
    customer_engagement_programs_implemented: DataTypes.BOOLEAN,
    type_of_customer_engagement_programs: DataTypes.STRING,
    social_impact_assessment_conducted: DataTypes.BOOLEAN,
    resettlement_and_compensation_measures_implemented: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'PrivacyAndSecurity76C',
  });
  return PrivacyAndSecurity76C;
};