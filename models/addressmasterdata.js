'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddressMasterData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AddressMasterData.belongsTo(models.AddressMasterData, {
        foreignKey: "parent_address_id",
        as: "parentAddress"
      })
    }
  }
  AddressMasterData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    parent_address_id: DataTypes.UUID,
    parent: DataTypes.STRING,
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_root: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    description: DataTypes.TEXT
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,   
    sequelize,
    modelName: 'AddressMasterData',
    tableName: 'AddressMasterData',
  });
  return AddressMasterData;
};