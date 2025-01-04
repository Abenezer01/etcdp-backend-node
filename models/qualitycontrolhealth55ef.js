'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QualityControlHealth55EF extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QualityControlHealth55EF.init({
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
    parameters: DataTypes.STRING,
    date: DataTypes.DATE,
    inspection_results: DataTypes.TEXT,
    corrective_action_taken: DataTypes.TEXT,
    remark: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'QualityControlHealth55EF',
  });
  return QualityControlHealth55EF;
};