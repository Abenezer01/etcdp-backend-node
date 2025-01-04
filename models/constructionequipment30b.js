'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConstructionEquipment30B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConstructionEquipment30B.init({
    id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    name: DataTypes.STRING,
    chassis_no: DataTypes.STRING,
    model: DataTypes.STRING,
    make_year: DataTypes.INTEGER,
    economical_service_time: DataTypes.INTEGER,
    capacity: DataTypes.DOUBLE,
    unit_price: DataTypes.DOUBLE,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ConstructionEquipment30B',
  });
  return ConstructionEquipment30B;
};