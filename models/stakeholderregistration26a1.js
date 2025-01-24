'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderRegistration26A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderRegistration26A1.init({
    stakeholdertype_id: DataTypes.STRING,
    stakeholdercategory_id: DataTypes.STRING,
    stakeholdersubcategory_id: DataTypes.STRING,
    serial_number: DataTypes.STRING,
    company_type: DataTypes.STRING,
    trade_name: DataTypes.STRING,
    tin_number: DataTypes.STRING,
    ownershiptype_id: DataTypes.STRING,
    businessfield_id: DataTypes.STRING,
    origin: DataTypes.STRING,
    operation_location: DataTypes.STRING,
    members_no: DataTypes.INTEGER
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'StakeholderRegistration26A1',
      tableName: 'StakeholderRegistration26A1s',
  });
  return StakeholderRegistration26A1;
};