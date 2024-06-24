"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models*/) {
      // define association here
    }
  }
  Child.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sex: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birth_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      family_status_id: DataTypes.UUID,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "Child",
      tableName: "children"
    }
  );
  return Child;
};
