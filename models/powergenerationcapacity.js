'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PowerGenerationCapacity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PowerGenerationCapacity.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    capacity: DataTypes.DOUBLE,
    annual_generation: DataTypes.DOUBLE,
    units_number: DataTypes.INTEGER,
    owner_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    commissioning_date: DataTypes.DATE,
    plant_life: DataTypes.INTEGER,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'PowerGenerationCapacity',
    tableName: 'PowerGenerationCapacities',
  });
  return PowerGenerationCapacity;
};