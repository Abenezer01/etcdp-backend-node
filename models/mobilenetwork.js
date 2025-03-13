'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MobileNetwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MobileNetwork.belongsTo(models.ProjectMasterData, {
        foreignKey: "mobile_network_type_id",
        as: "mobilenetworktype"
      });
    }
  }
  MobileNetwork.init({
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
    mobile_network_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    cell_towers: DataTypes.BOOLEAN,
    antennas: DataTypes.BOOLEAN,
    base_stations: DataTypes.BOOLEAN,
    repeaters: DataTypes.BOOLEAN,
    switches: DataTypes.BOOLEAN,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'MobileNetwork',
    tableName: 'MobileNetworks',
  });
  return MobileNetwork;
};