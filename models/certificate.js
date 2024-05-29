"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Certificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
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
      type: DataTypes.STRING,
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      certificate_no: DataTypes.STRING,
      date_of_issue: DataTypes.DATE,
      expiry_date: DataTypes.DATE,
      initial_certificate_no: DataTypes.STRING,
      initial_certificate_issue_date: DataTypes.DATE,

      file_id: DataTypes.UUID,
      revision_no: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Certificate",
      tableName: "certificates"
    }
  );
  return Certificate;
};
