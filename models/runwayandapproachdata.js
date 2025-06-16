'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RunwayAndApproachData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RunwayAndApproachData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    general_airport_information_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    runway_longitudinal_gradients: DataTypes.DOUBLE,
    runway_transverse_gradients: DataTypes.DOUBLE,
    approach_to_the_runway: DataTypes.DOUBLE,
    approach_and_runway_clear_zone: DataTypes.DOUBLE,
    apron_surface_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RunwayAndApproachData',
    tableName: 'RunwayAndApproachData',
  });
  return RunwayAndApproachData;
};