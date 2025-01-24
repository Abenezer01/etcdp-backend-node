'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeInventory80A3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BridgeInventory80A3.init({
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
    bridge_structure_type: DataTypes.STRING,
    slab_type: DataTypes.STRING,
    deck_type: DataTypes.STRING,
    pier_type: DataTypes.STRING,
    foundation_type: DataTypes.STRING,
    railing_type: DataTypes.STRING,
    bearing_type: DataTypes.STRING,
    abutment_type: DataTypes.STRING,
    expansion_joint_type: DataTypes.STRING,
    surface_type: DataTypes.STRING,
    span_support_type: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'BridgeInventory80A3',
      tableName: 'BridgeInventory80A3s'
  });
  return BridgeInventory80A3;
};