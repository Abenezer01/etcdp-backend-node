'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Upgrade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Upgrade.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    stakeholder_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    upgrade_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    previous_level: DataTypes.STRING,
    upgraded_level: DataTypes.STRING,
    ownership_percentage: DataTypes.DOUBLE,
    description: DataTypes.TEXT
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" , 
    sequelize,
    modelName: 'Upgrade',
    tableName: 'Upgrades',
    
  });
  return Upgrade;
};