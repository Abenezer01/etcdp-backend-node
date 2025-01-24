'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectDetails114B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectDetails114B.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    project_name: DataTypes.STRING,
    project_owner: DataTypes.STRING,
    contract_value: DataTypes.DOUBLE,
    project_duration_start: DataTypes.DATE,
    project_duration_end: DataTypes.DATE,
    guarantee_required: DataTypes.BOOLEAN
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ProjectDetails114B',
      tableName: 'ProjectDetails114Bs',
  });
  return ProjectDetails114B;
};