'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HydrologicalInfrastructure65D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HydrologicalInfrastructure65D.init({
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
    dam_type: DataTypes.STRING,
    dam_height: DataTypes.DOUBLE,
    spillway_type: DataTypes.STRING,
    penstock_length: DataTypes.DOUBLE,
    turbine_type: DataTypes.STRING,
    turbines_number: DataTypes.INTEGER,
    generators_type: DataTypes.STRING,
    generators_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HydrologicalInfrastructure65D',
  });
  return HydrologicalInfrastructure65D;
};