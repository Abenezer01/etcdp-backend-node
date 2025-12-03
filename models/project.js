"use strict";
const { Model } = require("sequelize");
const cipherHelper = require("../controllers/utils/cipher-helper");

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.hasOne(models.ProjectTime, {
        foreignKey: "project_id",
        as: "projecttime",
      });
      Project.hasOne(models.ProjectFinance, {
        foreignKey: "project_id",
        as: "projectfinance",
      });
      Project.hasMany(models.ProjectStakeholder, {
        foreignKey: "project_id",
        as: "projectstakeholders",
      });
      Project.hasMany(models.ProjectVariation, {
        foreignKey: "project_id",
        as: "projectvariations",
      });
      Project.hasMany(models.ProjectPlan, {
        foreignKey: "project_id",
        as: "projectplans",
      });
      Project.hasMany(models.ProjectReport, {
        foreignKey: "project_id",
        as: "projectreports",
      });
      Project.hasMany(models.ProjectStatus, {
        as: "projectstatuses",
        foreignKey: "project_id",
      });
      Project.hasMany(models.Payment, {
        foreignKey: "project_id",
        as: "payments",
      });
      Project.belongsTo(models.ProjectCategory, {
        foreignKey: "projectcategory_id",
        as: "projectcategory",
      });
      Project.belongsTo(models.ProjectSubCategory, {
        foreignKey: "projectsubcategory_id",
        as: "projectsubcategory",
      });
      Project.belongsTo(models.ProjectType, {
        foreignKey: "projecttype_id",
        as: "projecttype",
      });
      Project.belongsTo(models.Department, {
        as: "department",
        foreignKey: "department_id",
      });
    }
  }

  Project.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      department_id: DataTypes.UUID,
      parent_id: DataTypes.UUID,
      projectcategory_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      projecttype_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      projectsubcategory_id: DataTypes.UUID,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          const encryptedValue = this.getDataValue("name");
          const decryptedValue = cipherHelper.decrypt(encryptedValue);
          return decryptedValue;
        },
        set(value) {
          const encryptedValue = cipherHelper.encrypt(value);
          this.setDataValue("name", encryptedValue);
        },
      },
      grade: DataTypes.STRING,
      end_user: DataTypes.STRING,
      function: DataTypes.STRING,
      remark: DataTypes.TEXT,
      contract_no: DataTypes.STRING,
      budget_code: DataTypes.STRING,
      procurement_no: DataTypes.STRING,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
      sequelize,
      modelName: "Project",
      tableName: "projects",
    }
  );

  return Project;
};
