'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InternetConnectionInfrastructureManufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InternetConnectionInfrastructureManufacturer.belongsTo(models.InternetConnection, {
        foreignKey: "internet_connection_id",
        as: "internetconnection"
      })
    }
  }
  InternetConnectionInfrastructureManufacturer.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    internet_connection_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    routers: DataTypes.STRING,
    switches: DataTypes.STRING,
    modems: DataTypes.STRING,
    cables: DataTypes.STRING,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'InternetConnectionInfrastructureManufacturer',
    tableName: 'InternetConnectionInfrastructureManufacturers',
  });
  return InternetConnectionInfrastructureManufacturer;
};