"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Address.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      model_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      region: DataTypes.STRING,
      city: DataTypes.STRING,
      subcity: DataTypes.STRING,
      street: DataTypes.STRING,
      block_number: DataTypes.STRING,
      house_number: DataTypes.STRING,
      hq: DataTypes.BOOLEAN,
      northing: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      easting: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      revision_no: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
