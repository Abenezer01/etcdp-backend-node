'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InternetConnection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InternetConnection.init({
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
    internet_connection_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    routers: DataTypes.BOOLEAN,
    switches: DataTypes.BOOLEAN,
    modems: DataTypes.BOOLEAN,
    cables: DataTypes.BOOLEAN,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'InternetConnection',
    tableName: 'InternetConnections',
  });
  return InternetConnection;
};