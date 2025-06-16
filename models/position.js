"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models*/) {
      // define association here
    }
  }
  Position.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      department_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      role_id: {
        type: DataTypes.UUID
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      is_head: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      quantity_needed: DataTypes.INTEGER,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "Position",
      tableName: "positions"
    }
  );
  return Position;
};
