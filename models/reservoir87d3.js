'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservoir87D3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reservoir87D3.init({
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
    full_volume: DataTypes.DOUBLE,
    dead_storage_volume: DataTypes.DOUBLE,
    live_storage_volume: DataTypes.DOUBLE,
    area: DataTypes.DOUBLE,
    fetch_length: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'Reservoir87D3',
      tableName: 'Reservoir87D3s',
  });
  return Reservoir87D3;
};