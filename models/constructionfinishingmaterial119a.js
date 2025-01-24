'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConstructionFinishingMaterial119A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConstructionFinishingMaterial119A.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    project_id: DataTypes.UUID,
    finishing_type: DataTypes.STRING,
    construction_type: DataTypes.STRING,
    quantity_required: DataTypes.INTEGER,
    measurement_unit_id: DataTypes.UUID,
    quality_standard: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ConstructionFinishingMaterial119A',
      tableName: 'ConstructionFinishingMaterial119As',
  });
  return ConstructionFinishingMaterial119A;
};