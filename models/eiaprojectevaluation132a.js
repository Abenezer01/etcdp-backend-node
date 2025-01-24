'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EIAProjectEvaluation132A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EIAProjectEvaluation132A.init({
    project_id: DataTypes.UUID,
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'EIAProjectEvaluation132A',
      tableName: 'EIAProjectEvaluation132As',
  });
  return EIAProjectEvaluation132A;
};