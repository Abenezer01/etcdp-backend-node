'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project44A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project44A1.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    department_id: DataTypes.STRING,
    projecttype_id: DataTypes.STRING,
    projectcategory_id: DataTypes.STRING,
    projectsubcategory_id: DataTypes.STRING,
    project_name: DataTypes.STRING,
    remark: DataTypes.TEXT,
    contract_number: DataTypes.STRING,
    budget_code: DataTypes.STRING,
    precurment_number: DataTypes.STRING,
    budget_source: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'Project44A1',
      tableName: 'Project44A1s',
  });
  return Project44A1;
};