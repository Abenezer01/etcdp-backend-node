'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BranchAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BranchAddress.init({
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
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subcity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    woreda: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: DataTypes.STRING,
    block_no: DataTypes.STRING,
    website: DataTypes.STRING,
    northing: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    easting: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize,
    modelName: 'BranchAddress',
    tableName: 'BranchAddresses'
  });
  return BranchAddress;
};