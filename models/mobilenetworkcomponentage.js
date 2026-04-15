'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MobileNetworkComponentAge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MobileNetworkComponentAge.belongsTo(models.MobileNetwork, {
        foreignKey: "mobile_network_id",
        as: "mobilenetwork"
      });
    }
  }
  MobileNetworkComponentAge.init({
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
    cell: DataTypes.INTEGER,
    towers: DataTypes.INTEGER,
    antennas: DataTypes.INTEGER,
    base_stations: DataTypes.INTEGER,
    repeaters: DataTypes.INTEGER,
    switches: DataTypes.INTEGER,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'MobileNetworkComponentAge',
    tableName: 'MobileNetworkComponentAges',
  });
  return MobileNetworkComponentAge;
};