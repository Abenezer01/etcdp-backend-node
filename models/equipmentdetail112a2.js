'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EquipmentDetail112A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EquipmentDetail112A2.init({
    id: DataTypes.STRING,
    applicationform_id: DataTypes.STRING,
    machinery_type: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    year_of_manufacture: DataTypes.INTEGER,
    equipment_value: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'EquipmentDetail112A2',
  });
  return EquipmentDetail112A2;
};