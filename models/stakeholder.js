'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stakeholder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stakeholder.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    type_id: DataTypes.UUID,
    category_id: DataTypes.UUID,
    subcategory_id: DataTypes.UUID,
    trade_name: DataTypes.STRING,
    tin: DataTypes.STRING,
    ownership_id: DataTypes.UUID,
    businessfield_id: DataTypes.UUID,
    origin: DataTypes.STRING,
    operation_location: DataTypes.STRING,
    revision_no: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'stakeholder',
  });
  return stakeholder;
};