'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderMaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderMaterial.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: {
      type: DataTypes.UUID
    },
    stakeholder_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    material_category_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    material_subcategory_id: {
      type: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    purpose: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.DOUBLE,
    current_situation: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'StakeholderMaterial',
    tableName: 'StakeholderMaterials',
  });
  return StakeholderMaterial;
};