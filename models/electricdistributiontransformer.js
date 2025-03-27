'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ElectricDistributionTransformer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ElectricDistributionTransformer.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    service_area: DataTypes.DOUBLE,
    installation_year: DataTypes.INTEGER,
    transformers_total_number: DataTypes.INTEGER,
    gps_x_coordinates: DataTypes.DOUBLE,
    gps_y_coordinates: DataTypes.DOUBLE,
    fire_extinguishing_technology_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    other: DataTypes.TEXT,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'ElectricDistributionTransformer',
    tableName: 'ElectricDistributionTransformers',
  });
  return ElectricDistributionTransformer;
};