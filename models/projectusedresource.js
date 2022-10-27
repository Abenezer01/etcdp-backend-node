'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projectusedresource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projectusedresource.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: DataTypes.UUID,
    type: DataTypes.STRING,
    type: DataTypes.STRING,
    resourcecategory_id: DataTypes.UUID,
    resouresubcategory_id: DataTypes.UUID,
    name: DataTypes.STRING,
    item_specification: DataTypes.STRING,
    measurement_unit: DataTypes.STRING,
    quantity: DataTypes.DOUBLE,
    unit_price: DataTypes.DOUBLE,
    period_from: DataTypes.DATE,
    period_until: DataTypes.DATE,
    data_source_id: DataTypes.UUID,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'projectusedresource',
  });
  return projectusedresource;
};