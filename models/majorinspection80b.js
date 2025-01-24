'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MajorInspection80B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MajorInspection80B.init({
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
    bridge_part_defect: DataTypes.STRING,
    damage_type: DataTypes.STRING,
    damage_quantity: DataTypes.INTEGER,
    hydrology_defect: DataTypes.STRING,
    maintenance_action_recommendation: DataTypes.STRING,
    bridge_history: DataTypes.STRING,
    inspector_remark: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'MajorInspection80B',
      tableName: 'MajorInspection80Bs',
  });
  return MajorInspection80B;
};