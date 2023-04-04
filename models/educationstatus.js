"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class educationstatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  educationstatus.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: {
        type: DataTypes.UUID,
      },
      education_level: DataTypes.STRING,
      field_of_study: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      school_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: DataTypes.DATE,
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      address_id: DataTypes.UUID,
      gpa: {
        type: DataTypes.DOUBLE,
      },
    },
    {
      sequelize,
      modelName: "educationstatus",
    }
  );
  return educationstatus;
};
