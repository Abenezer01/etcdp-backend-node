'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaxExemptRights109ABCDE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TaxExemptRights109ABCDE.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    tax_type: DataTypes.STRING,
    description: DataTypes.TEXT,
    eligibility_criteria: DataTypes.TEXT,
    required_documents: DataTypes.TEXT,
    duration_of_exemption: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'TaxExemptRights109ABCDE',
      tableName: 'TaxExemptRights109ABCDEs',
  });
  return TaxExemptRights109ABCDE;
};