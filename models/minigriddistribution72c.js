'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MinigridDistribution72C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MinigridDistribution72C.init({
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
    type_of_system: DataTypes.STRING,
    type_of_lines: DataTypes.STRING,
    line_length: DataTypes.DOUBLE,
    poles: DataTypes.STRING,
    type_of_transformer: DataTypes.STRING,
    number_of_transformers: DataTypes.INTEGER,
    size_of_transformers: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'MinigridDistribution72C',
  });
  return MinigridDistribution72C;
};