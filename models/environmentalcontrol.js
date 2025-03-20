'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnvironmentalControl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EnvironmentalControl.belongsTo(models.DataCenter, {
        foreignKey: "data_center_id",
        as: "datacenter"
      })
    }
  }
  EnvironmentalControl.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    data_center_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    temperature: DataTypes.STRING,
    humidity: DataTypes.STRING,
    air_quality: DataTypes.STRING,
    others: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'EnvironmentalControl',
    tableName: 'EnvironmentalControls',
  });
  return EnvironmentalControl;
};