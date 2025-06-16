'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CanalAndPipeSystem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CanalAndPipeSystem.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    general_dam_information_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    canal_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    main_canal_length: DataTypes.DOUBLE,
    idle_canal_length: DataTypes.DOUBLE,
    secondary_canal_length: DataTypes.DOUBLE,
    tertiary_canal_length: DataTypes.DOUBLE,
    pressurized_system_mainline_pipe_diameter: DataTypes.DOUBLE,
    main_pipe_line_length: DataTypes.DOUBLE,
    total_lateral_pipe_length: DataTypes.DOUBLE,
    main_canal_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'CanalAndPipeSystem',
    tableName: 'CanalAndPipeSystems',
  });
  return CanalAndPipeSystem;
};