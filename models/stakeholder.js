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
      stakecategory_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      stakesubcategory_id: DataTypes.UUID,
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
      sequelize,
      modelName: "Stakeholder",
    }
  );
  Stakeholder.associate = function (models) {
    // Stakeholder.belongsTo(models.address, {
    //     as: "address",
    //     foreignKey: "address_id"
    // })
    Stakeholder.belongsTo(models.stakeholdertype, {
      as: "staketype",
      foreignKey: "stakeholdertype_id",
    });
    Stakeholder.belongsTo(models.stakecategory, {
      as: "stakecategory",
      foreignKey: "stakecategory_id",
    });
    Stakeholder.belongsTo(models.stakesubcategory, {
      as: "stakesubcategory",
      foreignKey: "stakesubcategory_id",
    });
    Stakeholder.belongsTo(models.ownership, {
      as: "ownership",
      foreignKey: "ownership_id",
    });
    Stakeholder.belongsTo(models.businessfield, {
      as: "businessfield",
      foreignKey: "businessfield_id",
    });
    Stakeholder.belongsTo(models.department, {
      as: "department",
      foreignKey: "department_id",
    });
  };
  return Stakeholder;
};
