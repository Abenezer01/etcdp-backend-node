'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HorizontalAlignment78G extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HorizontalAlignment78G.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: DataTypes.STRING,
    curve_radius: DataTypes.DOUBLE,
    curve_deflection_angle: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'HorizontalAlignment78G',
      tableName: 'HorizontalAlignment78Gs',
  });
  return HorizontalAlignment78G;
};