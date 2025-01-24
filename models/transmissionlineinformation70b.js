'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransmissionLineInformation70B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransmissionLineInformation70B.init({
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
    transmission_voltage: DataTypes.DOUBLE,
    length: DataTypes.DOUBLE,
    number_of_circuits: DataTypes.STRING,
    starting_point_coordinates: DataTypes.DOUBLE,
    ending_point_coordinates: DataTypes.DOUBLE,
    life_time: DataTypes.INTEGER
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'TransmissionLineInformation70B',
      tableName: 'TransmissionLineInformation70Bs',
  });
  return TransmissionLineInformation70B;
};