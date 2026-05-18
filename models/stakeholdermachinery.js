'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderMachinery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderMachinery.init({
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
    plate_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand_name: DataTypes.STRING,
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: DataTypes.INTEGER,
    chassis_number: DataTypes.STRING,
    engine_number: DataTypes.STRING,
    capacity: DataTypes.STRING,
    purpose: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    current_situation: DataTypes.STRING,
    // NEW PRECISION COORDINATES
    latitude: {
      type: DataTypes.DOUBLE
    },
    longitude: {
      type: DataTypes.DOUBLE
    },
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'StakeholderMachinery',
    tableName: 'StakeholderMachineries',
  });
  return StakeholderMachinery;
};