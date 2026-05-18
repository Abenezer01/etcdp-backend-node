'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConstructionMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ConstructionMethod.belongsTo(models.ProjectMasterData, {
        foreignKey: 'project_method_id',
        as: 'projectMethod'
      });
    }
  }
  ConstructionMethod.init({
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
    project_method_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    description: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'ConstructionMethod',
    tableName: 'ConstructionMethods'
  });
  return ConstructionMethod;
};