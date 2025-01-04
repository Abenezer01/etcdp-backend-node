'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FasteningSystem96E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FasteningSystem96E.init({
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
    fastening_system_type: DataTypes.STRING,
    fastener_condition_assessment: DataTypes.STRING,
    fastener_maintenance_replacement: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'FasteningSystem96E',
  });
  return FasteningSystem96E;
};