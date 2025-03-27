'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransmissionLineInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransmissionLineInformation.init({
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
    transmission_voltage: DataTypes.DOUBLE,
    transmission_line_route_length: DataTypes.DOUBLE,
    circuit_number: DataTypes.INTEGER,
    starting_point_northing: DataTypes.DOUBLE,
    starting_point_easting: DataTypes.DOUBLE,
    ending_point_northing: DataTypes.DOUBLE,
    ending_point_easting: DataTypes.DOUBLE,
    lifetime: DataTypes.INTEGER,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'TransmissionLineInformation',
    tableName: 'TransmissionLineInformations',
  });
  return TransmissionLineInformation;
};