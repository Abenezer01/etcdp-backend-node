'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderMasterData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderMasterData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    stakeholder_type_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    model: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    title: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    flag: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize,
    modelName: 'StakeholderMasterData',
    tableName: 'StakeholderMasterData'
  });
  return StakeholderMasterData;
};