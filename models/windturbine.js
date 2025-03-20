'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WindTurbine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WindTurbine.init({
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
    turbine_manufacturer: DataTypes.STRING,
    turbine_model: DataTypes.STRING,
    rotor_diameter: DataTypes.DOUBLE,
    hub_height: DataTypes.DOUBLE,
    tower_type_id: DataTypes.UUID,
    blade_length: DataTypes.DOUBLE,
    blades_number: DataTypes.INTEGER,
    gearbox_type: DataTypes.STRING,
    generator_type_id: DataTypes.UUID,
    generators_number: DataTypes.INTEGER,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'WindTurbine',
    tableName: 'WindTurbines',
  });
  return WindTurbine;
};