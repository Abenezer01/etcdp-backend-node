'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JointVenture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JointVenture.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    parent_id: {
      type: DataTypes.UUID
    },
    stakeholder_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    member_companies_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reference: {
      type: DataTypes.TEXT
    }
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",     
    sequelize,
    modelName: 'JointVenture',
    tableName: 'JointVentures',
  });
  return JointVenture;
};