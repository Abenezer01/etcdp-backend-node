'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BranchContactPerson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BranchContactPerson.init({
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
    stakeholder_branch_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: DataTypes.STRING
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize,
    modelName: 'BranchContactPerson',
    tableName: 'BranchContactPeople'
  });
  return BranchContactPerson;
};