'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middle_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allow: false
    },
    gender: DataTypes.STRING,
    marital_status: DataTypes.BOOLEAN,
    partner_name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    position_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    department_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    address_id: DataTypes.UUID,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};