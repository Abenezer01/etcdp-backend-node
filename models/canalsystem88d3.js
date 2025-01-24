'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CanalSystem88D3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CanalSystem88D3.init({
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
    main_canal_type: DataTypes.STRING,
    main_canal_length: DataTypes.DOUBLE,
    idle_canal_length: DataTypes.DOUBLE,
    secondary_canal_length: DataTypes.DOUBLE,
    tertiary_canal_length: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'CanalSystem88D3',
      tableName: 'CanalSystem88D3s'
  });
  return CanalSystem88D3;
};