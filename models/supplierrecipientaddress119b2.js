'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SupplierRecipientAddress119B2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SupplierRecipientAddress119B2.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    region: DataTypes.STRING,
    zone: DataTypes.STRING,
    woreda: DataTypes.STRING,
    city: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'SupplierRecipientAddress119B2',
      tableName: 'SupplierRecipientAddress119B2s',
  });
  return SupplierRecipientAddress119B2;
};