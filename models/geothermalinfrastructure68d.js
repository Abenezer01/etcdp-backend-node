'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeothermalInfrastructure68D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeothermalInfrastructure68D.init({
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
    turbine_manufacturer: DataTypes.STRING,
    turbine_model: DataTypes.STRING,
    turbine_type: DataTypes.STRING,
    turbine_capacity: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'GeothermalInfrastructure68D',
  });
  return GeothermalInfrastructure68D;
};