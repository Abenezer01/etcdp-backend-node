'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeInspection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BridgeInspection.init({
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bridge_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bridge_part_defect_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    damage_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    damage_condition_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    hydrology_defect_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    maintenance_action: DataTypes.TEXT,
    bridge_history: DataTypes.TEXT,
    inspector_remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'BridgeInspection',
    tableName: 'BridgeInspections',
  });
  return BridgeInspection;
};