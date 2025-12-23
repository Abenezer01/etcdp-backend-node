'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeSubStructure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BridgeSubStructure.belongsTo(models.BridgeBasicData, {
        foreignKey: 'bridge_id',
        as: 'bridge'
      });
    }
  }
  BridgeSubStructure.init({
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
    abutment_a1_height: DataTypes.DOUBLE,
    abutment_a1_width: DataTypes.DOUBLE,
    abutment_a2_height: DataTypes.DOUBLE,
    abutment_a2_width: DataTypes.DOUBLE,
    wing_wall_length: DataTypes.DOUBLE,
    pier_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    piers_number: DataTypes.INTEGER,
    piers_dimension: DataTypes.STRING,
    pier1_height: DataTypes.DOUBLE,
    pier1_width: DataTypes.DOUBLE,
    pier2_height: DataTypes.DOUBLE,
    pier2_width: DataTypes.DOUBLE
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'BridgeSubStructure',
    tableName: 'BridgeSubStructures',
  });
  return BridgeSubStructure;
};