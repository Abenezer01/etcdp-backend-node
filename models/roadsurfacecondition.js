'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoadSurfaceCondition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoadSurfaceCondition.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    road_segment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cracks: DataTypes.BOOLEAN,
    rutting: DataTypes.BOOLEAN,
    patching: DataTypes.BOOLEAN,
    drainage_problems: DataTypes.BOOLEAN,
    action_taken_date: DataTypes.DATE,
    action_taken: DataTypes.STRING,
    action_taken_cost: DataTypes.DOUBLE,
    assessment_condition_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    surface_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RoadSurfaceCondition',
    tableName: 'RoadSurfaceConditions',
  });
  return RoadSurfaceCondition;
};