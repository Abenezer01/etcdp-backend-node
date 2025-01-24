'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StationStructuralElement100D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StationStructuralElement100D.init({
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
    used_material: DataTypes.STRING,
    roofing_type: DataTypes.STRING,
    roofing_design: DataTypes.STRING,
    canopy_detail: DataTypes.TEXT,
    lighting_fixtures: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'StationStructuralElement100D',
      tableName: 'StationStructuralElement100Ds',
  });
  return StationStructuralElement100D;
};