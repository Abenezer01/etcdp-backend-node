'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SupplierRecipientData119B1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SupplierRecipientData119B1.init({
    id: DataTypes.UUID,
    company_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    material_id: DataTypes.UUID,
    brand: DataTypes.STRING,
    model_no: DataTypes.STRING,
    lead_time: DataTypes.DATE,
    sustainability_certification: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SupplierRecipientData119B1',
  });
  return SupplierRecipientData119B1;
};