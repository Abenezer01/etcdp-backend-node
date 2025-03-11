'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfessionalAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfessionalAddress.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    professional_id: {
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
    sub_city: {
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
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    easting: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    }
  }, {

    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize,
    modelName: 'ProfessionalAddress',
    tableName: 'ProfessionalAddresses'
  });
  return ProfessionalAddress;
};