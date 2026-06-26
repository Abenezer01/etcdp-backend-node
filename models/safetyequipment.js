'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SafetyEquipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SafetyEquipment.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: {
      type: DataTypes.UUID
    },
    stakeholder_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serial_no: DataTypes.STRING,
    brand_name: DataTypes.STRING,
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: DataTypes.INTEGER,
    capacity: DataTypes.STRING,
    purpose: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    current_situation: DataTypes.STRING,
    location: {
      type: DataTypes.STRING,
    },
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SafetyEquipment',
    tableName: 'SafetyEquipments',
  });
  return SafetyEquipment;
};
