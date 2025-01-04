'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuditReportParameter129BCDEFGH2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuditReportParameter129BCDEFGH2.init({
    project_id: DataTypes.STRING,
    audit_report_type_id: DataTypes.STRING,
    title: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AuditReportParameter129BCDEFGH2',
  });
  return AuditReportParameter129BCDEFGH2;
};