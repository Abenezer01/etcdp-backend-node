"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmployeeEducation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EmployeeEducation.belongsTo(models.StudyLevel, {
        as: "studylevel",
        foreignKey: "studylevel_id",
      });
    }
  }
  EmployeeEducation.init(
    {
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
      year: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      domain: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department_name: DataTypes.STRING,
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      male: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      female: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      studylevel_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      file_id: {
        type: DataTypes.UUID,
      },
      
      revision_no: {
        type: DataTypes.INTEGER,
      },
      total_employees: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.male + this.female;
        },
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "EmployeeEducation",
      tableName: "employeeeducations"
    }
  );
  return EmployeeEducation;
};
