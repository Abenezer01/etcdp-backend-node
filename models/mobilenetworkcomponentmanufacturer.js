'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MobileNetworkComponentManufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      MobileNetworkComponentManufacturer.belongsTo(models.MobileNetwork, {
        foreignKey: "mobile_network_id",
        as: "mobilenetwork"
      });
    }
  }
  MobileNetworkComponentManufacturer.init({
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
    mobile_network_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    cell: DataTypes.STRING,
    towers: DataTypes.STRING,
    antennas: DataTypes.STRING,
    base_stations: DataTypes.STRING,
    repeaters: DataTypes.STRING,
    switches: DataTypes.STRING,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'MobileNetworkComponentManufacturer',
    tableName: 'MobileNetworkComponentManufacturers'
  });
  return MobileNetworkComponentManufacturer;
};