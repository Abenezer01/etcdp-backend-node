'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderMachinery28B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderMachinery28B.init({
    id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    equipment_type: DataTypes.STRING,
    plate_no: DataTypes.STRING,
    model: DataTypes.STRING,
    year_make: DataTypes.INTEGER,
    chassis_no: DataTypes.STRING,
    engine_no: DataTypes.STRING,
    capacity: DataTypes.STRING,
    purpose: DataTypes.STRING,
    current_situation: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StakeholderMachinery28B',
  });
  return StakeholderMachinery28B;
};