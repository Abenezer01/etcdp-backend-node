'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StationLayout100B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StationLayout100B.init({
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
    number: DataTypes.INTEGER,
    configuration: DataTypes.STRING,
    length: DataTypes.DOUBLE,
    width: DataTypes.DOUBLE,
    accessibility_features: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StationLayout100B',
  });
  return StationLayout100B;
};