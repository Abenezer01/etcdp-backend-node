'use strict';
const { Model } = require('sequelize');
const cipherHelper = require("../controllers/utils/cipher-helper");
module.exports = (sequelize, DataTypes) => {
  class ProjectOverview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectOverview.init({
    project_id: DataTypes.UUID,
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const encryptedValue = this.getDataValue("project_name");
        const decryptedValue = cipherHelper.decrypt(encryptedValue);
        return decryptedValue;
      },
      set(value) {
        const encryptedValue = cipherHelper.encrypt(value);
        this.setDataValue("project_name", encryptedValue);
      },
    },

    department_id: DataTypes.UUID,
    original_contract_amount: DataTypes.DOUBLE,
    original_contract_duration: DataTypes.INTEGER,
    total_variation_amount: DataTypes.DOUBLE,
    planned_financial_performance: DataTypes.DOUBLE,
    planned_physical_performance: DataTypes.DOUBLE,
    report_financial_performance: DataTypes.DOUBLE,
    report_physical_performance: DataTypes.DOUBLE,
    advance_payment: DataTypes.DOUBLE,
    interim_payment: DataTypes.DOUBLE,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,
    sequelize,
    modelName: 'ProjectOverview',
    tableName: 'project_overview',
  });
  return ProjectOverview;
};