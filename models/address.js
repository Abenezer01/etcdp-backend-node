
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
      Address.belongsTo(models.AddressMasterData, {
        foreignKey: "country_id",
        as: "country",
      });
      Address.belongsTo(models.AddressMasterData, {
        foreignKey: "region_id",
        as: "region",
      });
      Address.belongsTo(models.AddressMasterData, {
        foreignKey: "city_id",
        as: "city",
      });
      Address.belongsTo(models.AddressMasterData, {
        foreignKey: "subcity_id",
        as: "subcity",
      });
      Address.belongsTo(models.AddressMasterData, {
        foreignKey: "woreda_id",
        as: "woreda",
      });
      Address.belongsTo(models.AddressMasterData, {
        foreignKey: "street_id",
        as: "street",
      });
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
      country_id: DataTypes.UUID,
      region_id: DataTypes.UUID,
      city_id: DataTypes.UUID,
      subcity_id: DataTypes.UUID,
      woreda_id: DataTypes.UUID,
      kebele: DataTypes.UUID,
      street_id: DataTypes.UUID,
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
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "Address",
      tableName: "addresses",
    }
  );
  return Address;
};
