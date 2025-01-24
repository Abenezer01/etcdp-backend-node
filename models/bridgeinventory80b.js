'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeInventory80B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BridgeInventory80B.init({
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
    type_of_slab: DataTypes.STRING,
    river_width: DataTypes.STRING,
    deck_type: DataTypes.STRING,
    highest_water_level: DataTypes.STRING,
    type_of_pier: DataTypes.STRING,
    type_of_foundation: DataTypes.STRING,
    type_of_railing: DataTypes.STRING,
    type_of_bearing: DataTypes.STRING,
    type_of_abutment: DataTypes.STRING,
    type_of_expansion_joint: DataTypes.STRING,
    type_of_surface_span_support: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'BridgeInventory80B',
      tableName: 'BridgeInventory80Bs'
  });
  return BridgeInventory80B;
};