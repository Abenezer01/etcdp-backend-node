'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stakesubcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stakesubcategory.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    stakeholder_type_id: DataTypes.UUID,
    stakecategory_id: DataTypes.UUID,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    revision_no: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'stakesubcategory',
  });
  return stakesubcategory;
};