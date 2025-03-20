'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InternetConnectionInfrastructureAge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InternetConnectionInfrastructureAge.belongsTo(models.InternetConnection, {
        foreignKey: "internet_connection_id",
        as: "internetConnection"
      })
    }
  }
  InternetConnectionInfrastructureAge.init({
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
    routers: DataTypes.INTEGER,
    switches: DataTypes.INTEGER,
    modems: DataTypes.INTEGER,
    cables: DataTypes.INTEGER,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'InternetConnectionInfrastructureAge',
    tableName: 'InternetConnectionInfrastructureAges',
  });
  return InternetConnectionInfrastructureAge;
};