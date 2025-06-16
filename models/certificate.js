"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Certificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models*/) {
      // define association here
    }
  }
  Certificate.init(
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
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scope: {
        type: DataTypes.STRING,
        allowNull: false
      },
      certifying_body: {
        type: DataTypes.STRING,
        allowNull: false
      },
      certification_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      issue_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      expire_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      remark: DataTypes.TEXT
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "Certificate",
      tableName: "Certificates"
    }
  );
  return Certificate;
};
