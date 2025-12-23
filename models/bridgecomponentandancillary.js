'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeComponentAndAncillary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BridgeComponentAndAncillary.belongsTo(models.BridgeBasicData, {
        foreignKey: 'bridge_id',
        as: 'bridge'
      })
    }
  }
  BridgeComponentAndAncillary.init({
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
    expansion_joint_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    guard_railing_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    abutment_bearing_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    piers_bearing_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    surface_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'BridgeComponentAndAncillary',
    tableName: 'BridgeComponentAndAncillaries'
  });
  return BridgeComponentAndAncillary;
};