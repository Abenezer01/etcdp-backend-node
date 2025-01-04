'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderOwnerOrManager26AB extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderOwnerOrManager26AB.init({
    id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    type: DataTypes.STRING,
    first_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    nationality: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    gender: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    partnership_size: DataTypes.DOUBLE,
    identification_document: DataTypes.STRING,
    certificate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StakeholderOwnerOrManager26AB',
  });
  return StakeholderOwnerOrManager26AB;
};