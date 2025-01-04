'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PressurizedSystem88D4 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PressurizedSystem88D4.init({
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
    main_pipe_diameter: DataTypes.DOUBLE,
    main_pipe_length: DataTypes.DOUBLE,
    total_lateral_pipe_length: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'PressurizedSystem88D4',
  });
  return PressurizedSystem88D4;
};