'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Claim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Claim.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: {
      type: DataTypes.UUID,
    },
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    measures_taken: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize,
    modelName: 'Claim',
    tableName: 'Claims'
  });
  return Claim;
};