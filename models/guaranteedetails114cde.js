'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GuaranteeDetails114CDE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GuaranteeDetails114CDE.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    project_detail_id: DataTypes.UUID,
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    guarantee_amount: DataTypes.DOUBLE,
    guarantee_validity_period: DataTypes.DATE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'GuaranteeDetails114CDE',
      tableName: 'GuaranteeDetails114CDEs',
  });
  return GuaranteeDetails114CDE;
};