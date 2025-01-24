'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SmartMeterInformation76A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SmartMeterInformation76A.init({
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
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    smart_meter_type: DataTypes.STRING,
    year_of_installation: DataTypes.DATE,
    number_of_smart_meters_installed: DataTypes.INTEGER,
    kwh_kvarh_rating: DataTypes.DOUBLE,
    phase_type: DataTypes.STRING,
    maximum_current_rating: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'SmartMeterInformation76A',
      tableName: 'SmartMeterInformation76As',
  });
  return SmartMeterInformation76A;
};