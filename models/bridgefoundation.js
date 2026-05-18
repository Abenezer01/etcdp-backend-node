'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeFoundation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BridgeFoundation.belongsTo(models.BridgeBasicData, { 
        foreignKey: 'bridge_id', 
        as: 'bridge'
      }) 
      BridgeFoundation.belongsTo(models.ProjectMasterData, { 
        foreignKey: 'abutment_type_id', 
        as: 'abutmentType'
      })
      BridgeFoundation.belongsTo(models.ProjectMasterData, { 
        foreignKey: 'pier_type_id', 
        as: 'pierType'
      })
      BridgeFoundation.belongsTo(models.ProjectMasterData, { 
        foreignKey: 'soil_type_id', 
        as: 'soilType'
      })

    }
  }
  BridgeFoundation.init({
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
    abutment_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    pier_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    abutment_foundation_size: DataTypes.DOUBLE,
    pier_foundation_size: DataTypes.DOUBLE,
    abutment_pile_number: DataTypes.INTEGER,
    pier_pile_number: DataTypes.INTEGER,
    abutment_pile_depth: DataTypes.DOUBLE,
    pier_pile_depth: DataTypes.DOUBLE,
    soil_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'BridgeFoundation',
    tableName: 'BridgeFoundations',
  });
  return BridgeFoundation;
};