'use strict';
const {
  Model
} = require('sequelize');
const cipherHelper = require("../controllers/utils/cipher-helper");

module.exports = (sequelize, DataTypes) => {
  class ProjectContractDataOverview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectContractDataOverview.init({
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
    original_contract_duration: DataTypes.INTEGER,
    commencement_date: DataTypes.DATE,
    total_contract_amount: DataTypes.DOUBLE,
    client_id: DataTypes.UUID,
    consultant_id: DataTypes.UUID,
    contractor_id: DataTypes.UUID,
    total_extension_days: DataTypes.INTEGER,
    planned_financial_performance: DataTypes.DOUBLE,
    actual_financial_performance: DataTypes.DOUBLE,
    actual_cost: DataTypes.DOUBLE,
    paid_ipc: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,
    sequelize,
    modelName: 'ProjectContractDataOverview',
    tableName: 'project_contract_data_overview',
  });
  return ProjectContractDataOverview;
};
