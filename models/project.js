"use strict";
const { Model } = require("sequelize");
const cipherHelper = require("../controllers/utils/cipher-helper");
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project.init(
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
            this.setDataValue('name', encryptedValue);
          }
      },
      remark: DataTypes.TEXT,
      contract_no: DataTypes.STRING,
      budget_code: DataTypes.STRING,
      procurement_no: DataTypes.STRING,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "project",
    }
  );

  project.associate = function (models) {
    // associations can be defined here
    project.hasOne(models.projecttime, {
      foreignKey: "project_id",
    });
    project.hasOne(models.projectfinance, {
      foreignKey: "project_id",
    });
    project.hasMany(models.projectstakeholder, {
      foreignKey: "project_id",
    });
    project.hasMany(models.projectvariation, {
      foreignKey: "project_id",
    });

    project.hasMany(models.projectplan, {
      foreignKey: "project_id",
    });
    project.hasMany(models.projectreport, {
      foreignKey: "project_id",
    });

    project.hasMany(models.projectstatus, {
    as: "projectstatus",
    foreignKey: "project_id",
    });
    project.hasMany(models.payment, {
      foreignKey: "project_id",
    });
    project.belongsTo(models.projectcategory, {
      foreignKey: "projectcategory_id",
    });
    project.belongsTo(models.projectsubcategory, {
      foreignKey: "projectsubcategory_id",
    });
    project.belongsTo(models.projecttype, {
      foreignKey: "projecttype_id",
    });
    project.belongsTo(models.department, {
      as: "department",
      foreignKey: "department_id",
    });
  };

  return project;
};
