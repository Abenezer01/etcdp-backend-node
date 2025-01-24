'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ThermalResourceInformation69C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ThermalResourceInformation69C.init({
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
    type: DataTypes.STRING,
    fuel_source: DataTypes.STRING,
    heat_rate_at_max: DataTypes.DOUBLE,
    plant_life: DataTypes.INTEGER,
    unit_commitment_rank: DataTypes.INTEGER
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ThermalResourceInformation69C',
      tableName: 'ThermalResourceInformation69Cs',
  });
  return ThermalResourceInformation69C;
};