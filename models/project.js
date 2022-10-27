'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    projectcategory_id: DataTypes.UUID,
    projectsubcategory_id: DataTypes.UUID,
    name: DataTypes.STRING,
    remark: DataTypes.TEXT,
    contract_no: DataTypes.STRING,
    budget_code: DataTypes.STRING,
    procurement_no: DataTypes.STRING,
    client_id: DataTypes.UUID,
    consultant_id: DataTypes.UUID,
    contractor_id: DataTypes.UUID,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};