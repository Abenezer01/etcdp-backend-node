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
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
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
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'StakeholderOwnerOrManager26AB',
      tableName: 'StakeholderOwnerOrManager26ABs',
  });
  return StakeholderOwnerOrManager26AB;
};