"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: {
        type: DataTypes.UUID,
      },
      project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      type: DataTypes.STRING,
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      amount: {
        type: DataTypes.DOUBLE,
      },
      retention: {
        type: DataTypes.DOUBLE,
      },
      reference_number: {
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at' ,     
      sequelize,
      modelName: "Payment",
      tableName: "payments"
    }
  );
  return Payment;
};
