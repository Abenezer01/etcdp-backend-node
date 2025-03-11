'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JointVentureCompany extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JointVentureCompany.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    stakeholder_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    joint_venture_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specialization: {
      type: DataTypes.STRING
    },
    roles_and_responsibilities: {
      type: DataTypes.TEXT
    },
    ownership_percentage: {
      type: DataTypes.DOUBLE
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reference: {
      type: DataTypes.TEXT,
      allowNull: false
    }
    
  }, {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'JointVentureCompany',
      tableName: 'JointVentureCompanies',
  });
  return JointVentureCompany;
};