'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeotechnicalInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeotechnicalInformation.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    soil_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    ground_water_impact_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    soil_bearing_capacity: DataTypes.DOUBLE,
    slope_stability_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    retaining_walls: DataTypes.BOOLEAN,
    geological_hazard: DataTypes.TEXT,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'GeotechnicalInformation',
    tableName: 'GeotechnicalInformations',
  });
  return GeotechnicalInformation;
};