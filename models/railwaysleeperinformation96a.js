'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwaySleeperInformation96A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwaySleeperInformation96A.init({
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
    section_name: DataTypes.STRING,
    owner: DataTypes.STRING,
    establishment_year: DataTypes.INTEGER,
    infrustructure_type: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RailwaySleeperInformation96A',
  });
  return RailwaySleeperInformation96A;
};