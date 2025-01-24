'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ManufacturedConstructionMaterialQuality122A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ManufacturedConstructionMaterialQuality122A1.init({
    company_name: DataTypes.STRING,
    material_type: DataTypes.STRING,
    quality_parameter_id: DataTypes.UUID,
    value: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ManufacturedConstructionMaterialQuality122A1',
      tableName: 'ManufacturedConstructionMaterialQuality122A1s',
  });
  return ManufacturedConstructionMaterialQuality122A1;
};