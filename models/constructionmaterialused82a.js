'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConstructionMaterialUsed82A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConstructionMaterialUsed82A.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    quantity: DataTypes.DOUBLE,
    cost: DataTypes.DOUBLE,
    budget_allocation: DataTypes.DOUBLE,
    budget_expenditure: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ConstructionMaterialUsed82A',
      tableName: 'ConstructionMaterialUsed82As'
  });
  return ConstructionMaterialUsed82A;
};