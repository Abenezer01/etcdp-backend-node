'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MSESupport117A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MSESupport117A.init({
    id: DataTypes.UUID,
    company_name: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    location: DataTypes.STRING,
    financial_support: DataTypes.TEXT,
    training_capacity_building: DataTypes.TEXT,
    networking_business_development: DataTypes.TEXT,
    access_information_resources: DataTypes.TEXT,
    technology_innovation_support: DataTypes.TEXT,
    quality_standards_compliance: DataTypes.TEXT,
    policy_advocacy: DataTypes.TEXT,
    access_international_markets: DataTypes.TEXT,
    success_stories: DataTypes.TEXT,
    challenges_faced: DataTypes.TEXT,
    opportunities: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'MSESupport117A',
  });
  return MSESupport117A;
};