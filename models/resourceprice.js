'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResourcePrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResourcePrice.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    department_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    resource_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    resource_brand_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    resource_specification_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    unit_price: {
      type: DataTypes.DOUBLE,
    },
    total_quantity_available: DataTypes.INTEGER,
    price_date: DataTypes.DATE,
    supplier_name_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    supplier_address_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    quality_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" , 
    sequelize,
    modelName: 'ResourcePrice',
    tableName: 'ResourcePrices',
  });
  return ResourcePrice;
};