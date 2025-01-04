'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LandscapeInformation78C3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LandscapeInformation78C3.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: DataTypes.STRING,
    slope: DataTypes.STRING,
    soil_type: DataTypes.STRING,
    vegetation: DataTypes.STRING,
    inspection_date: DataTypes.DATE,
    inspector_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LandscapeInformation78C3',
  });
  return LandscapeInformation78C3;
};