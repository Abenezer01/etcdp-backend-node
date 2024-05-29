"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Regulation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Regulation.init(
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
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      prepared_by: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      effective_start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      effective_end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Regulation",
    }
  );
  return Regulation;
};
