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
      Professional.belongsTo(models.Department, {
        as: "department",
        foreignKey: "department_id",
      });
    }
  }
  Professional.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    department_id: DataTypes.UUID,
    full_name: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING,
      defaultValue: "Male"
    },
    study_field: {
      type: DataTypes.STRING
    },
    license_no: {
      type: DataTypes.STRING
    },
    license_category: {
      type: DataTypes.STRING
    },
    license_grade: {
      type: DataTypes.STRING
    },
    national_id_no: {
      type: DataTypes.STRING
    },
    region: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    phone_no: {
      type: DataTypes.STRING  
    },
    license_given_data: {
      type: DataTypes.DATE  
    },
    remark: {
      type: DataTypes.TEXT
    }
  }, {
    
    createdAt: "created_at",
    updatedAt: "updated_at" ,     
    sequelize,  
    modelName: 'Professional',
    tableName: 'Professionals'
  });
  return Professional;
};