'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PowerSupplyConfiguration101B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PowerSupplyConfiguration101B.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    type: DataTypes.STRING,
    voltage_level: DataTypes.DOUBLE,
    frequency: DataTypes.DOUBLE,
    capacity: DataTypes.DOUBLE,
    load_requirement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PowerSupplyConfiguration101B',
  });
  return PowerSupplyConfiguration101B;
};