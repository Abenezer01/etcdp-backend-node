'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomsDutyFree124A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CustomsDutyFree124A.init({
    company_name: DataTypes.STRING,
    registration_number: DataTypes.STRING,
    project_name: DataTypes.STRING,
    project_location: DataTypes.STRING,
    project_duration: DataTypes.INTEGER,
    project_budget: DataTypes.DOUBLE,
    import_export_activity: DataTypes.TEXT,
    imported_items: DataTypes.TEXT,
    quantity: DataTypes.INTEGER,
    customs_duty_exemption: DataTypes.DOUBLE,
    tax_exemption: DataTypes.STRING,
    supporting_document: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'CustomsDutyFree124A',
      tableName: 'CustomsDutyFree124As',
  });
  return CustomsDutyFree124A;
};