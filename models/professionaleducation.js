'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfessionalEducation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        ProfessionalEducation.belongsTo(models.StakeholderMasterData, {
          foreignKey: 'study_field_id',
          as: 'studyField',
        });
        ProfessionalEducation.belongsTo(models.StakeholderMasterData, {
          foreignKey: 'program_type_id',
          as: 'programType',
        });
    }
  }
  ProfessionalEducation.init({
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
    study_field_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    school_name: DataTypes.STRING,
    education_level: DataTypes.STRING,
    program_type_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    gpa: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {

    createdAt: "created_at",
    updatedAt: "updated_at" ,     
    sequelize,
    modelName: 'ProfessionalEducation',
    tableName: 'ProfessionalEducations'
  });
  return ProfessionalEducation;
};