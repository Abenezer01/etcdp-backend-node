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
      BridgeInspection.belongsTo(models.BridgeBasicData, { 
        foreignKey: 'bridge_id', 
        as: 'bridge'
      });  
      BridgeInspection.belongsTo(models.ProjectMasterData, { 
        foreignKey: 'bridge_part_defect_id', 
        as: 'bridgePartDefect'
      });
      BridgeInspection.belongsTo(models.ProjectMasterData, { 
        foreignKey: 'damage_type_id', 
        as: 'damageType'
      });
      BridgeInspection.belongsTo(models.ProjectMasterData, { 
        foreignKey: 'damage_condition_id', 
        as: 'damageCondition'
      });
      BridgeInspection.belongsTo(models.ProjectMasterData, { 
        foreignKey: 'hydrology_defect_id', 
        as: 'hydrologyDefect'
      });
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
   bridge_id: {
      type: DataTypes.UUID,
      allowNull: false
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