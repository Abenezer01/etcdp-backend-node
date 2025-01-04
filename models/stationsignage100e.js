'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StationSignage100E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StationSignage100E.init({
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
    type: DataTypes.STRING,
    placement: DataTypes.STRING,
    accessibility: DataTypes.STRING,
    wayfinding_aid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StationSignage100E',
  });
  return StationSignage100E;
};