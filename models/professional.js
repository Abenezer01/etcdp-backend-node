'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Professional.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: DataTypes.STRING,
    national_id_no: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    gender: DataTypes.STRING,
    phone_no: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    
    createdAt: "created_at",
    updatedAt: "updated_at" ,     
    sequelize,  
    modelName: 'Professional',
    tableName: 'Professionals'
  });
  return Professional;
};