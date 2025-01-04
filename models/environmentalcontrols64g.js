'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnvironmentalControls64G extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnvironmentalControls64G.init({
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
    temperature: DataTypes.DOUBLE,
    humidity: DataTypes.DOUBLE,
    air_quality: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'EnvironmentalControls64G',
  });
  return EnvironmentalControls64G;
};