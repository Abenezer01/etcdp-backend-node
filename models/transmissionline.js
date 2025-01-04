"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TransmissionLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models*/) {
      // define association here
    }
  }
  TransmissionLine.init(
    {
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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      line_type: DataTypes.STRING,
      transmission_capacity: DataTypes.STRING,
      transmitting_power: DataTypes.STRING,
      transmitting_current: DataTypes.STRING,
      transmitting_voltage: DataTypes.STRING,
      transmission_towers_number: DataTypes.INTEGER,
      start_northing: DataTypes.DOUBLE,
      start_easting: DataTypes.DOUBLE,
      end_northing: DataTypes.DOUBLE,
      end_easting: DataTypes.DOUBLE,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "TransmissionLine",
      tableName: "transmissionlines"
    }
  );
  return TransmissionLine;
};
