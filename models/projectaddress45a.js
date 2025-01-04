'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectAddress45A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectAddress45A.init({
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
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    sub_city: DataTypes.STRING,
    woreda: DataTypes.STRING,
    northing: DataTypes.DOUBLE,
    easting: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'ProjectAddress45A',
  });
  return ProjectAddress45A;
};