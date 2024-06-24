"use strict";
const { Model } = require("sequelize");
const CipherHelper = require("../controllers/utils/cipher-helper");

module.exports = (sequelize, DataTypes) => {
  class Stakeholder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      Stakeholder.belongsTo(models.StakeholderType, {
        as: "stakeholdertype",
        foreignKey: "stakeholdertype_id",
      });
      Stakeholder.belongsTo(models.StakeholderCategory, {
        as: "stakeholdercategory",
        foreignKey: "stakeholdercategory_id",
      });
      Stakeholder.belongsTo(models.StakeholderSubCategory, {
        as: "stakeholdersubcategory",
        foreignKey: "stakeholdersubcategory_id",
      });
      Stakeholder.belongsTo(models.Ownership, {
        as: "ownership",
        foreignKey: "ownership_id",
      });
      Stakeholder.belongsTo(models.BusinessField, {
        as: "businessfield",
        foreignKey: "businessfield_id",
      });
      Stakeholder.belongsTo(models.Department, {
        as: "department",
        foreignKey: "department_id",
      });


      Stakeholder.hasMany(models.StakeholderEmail, {
        as: "stakeholderemails",
        foreignKey: "stakeholder_id",
      });

      Stakeholder.hasMany(models.StakeholderPhone, {
        as: "stakeholderphones",
        foreignKey: "stakeholder_id",
      });

      Stakeholder.hasMany(models.OperationLocation, {
        as: "operationlocations",
        foreignKey: "stakeholder_id",
      });
    }
  }

  Stakeholder.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      department_id: DataTypes.UUID,
      stakeholdertype_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      stakeholdercategory_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      stakeholdersubcategory_id: DataTypes.UUID,
      trade_name: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          const encryptedValue = this.getDataValue("trade_name");
          const decryptedValue = CipherHelper.decrypt(encryptedValue);
          return decryptedValue;
        },
        set(value) {
          const encryptedValue = CipherHelper.encrypt(value);
          this.setDataValue("trade_name", encryptedValue);
        },
      },
      tin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ownership_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      businessfield_id: DataTypes.UUID,
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      license_issued_date: DataTypes.DATE,
      revision_no: {
        type: DataTypes.INTEGER,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "Stakeholder",
      tableName: "stakeholders"
    }
  );

  return Stakeholder;
};
