'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BudgetRelated55D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BudgetRelated55D.init({
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
    planned_amount: DataTypes.DOUBLE,
    actual_amount: DataTypes.DOUBLE,
    variance: DataTypes.DOUBLE,
    remark: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'BudgetRelated55D',
      tableName: 'BudgetRelated55Ds'
  });
  return BudgetRelated55D;
};