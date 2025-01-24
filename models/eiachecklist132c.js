'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EIAChecklist132C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EIAChecklist132C.init({
    eia_project_evaluation_id: DataTypes.UUID,
    air_quality: DataTypes.BOOLEAN,
    water_quality_resources: DataTypes.BOOLEAN,
    soil_land_use: DataTypes.BOOLEAN,
    noise_vibration: DataTypes.BOOLEAN,
    flora_fauna: DataTypes.BOOLEAN,
    cultural_heritage: DataTypes.BOOLEAN,
    socioeconomic_impacts: DataTypes.BOOLEAN,
    waste_management: DataTypes.BOOLEAN
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'EIAChecklist132C',
      tableName: 'EIAChecklist132Cs',
  });
  return EIAChecklist132C;
};