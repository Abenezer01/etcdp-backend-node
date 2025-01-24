'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderDetail26A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderDetail26A2.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    stakeholder_id: DataTypes.UUID,
    paidup_capital: DataTypes.DOUBLE,
    description: DataTypes.TEXT,
    license_issued_date: DataTypes.DATE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'StakeholderDetail26A2',
      tableName: 'StakeholderDetail26A2s',
  });
  return StakeholderDetail26A2;
};