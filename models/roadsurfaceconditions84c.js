'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoadSurfaceConditions84C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoadSurfaceConditions84C.init({
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
    condition: DataTypes.STRING,
    description: DataTypes.TEXT,
    date_of_action: DataTypes.DATE,
    cost_of_action: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'RoadSurfaceConditions84C',
      tableName: 'RoadSurfaceConditions84Cs',
  });
  return RoadSurfaceConditions84C;
};