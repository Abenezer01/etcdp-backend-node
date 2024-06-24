"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Railway extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models*/) {
      // define association here
    }
  }
  Railway.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      energy_source: DataTypes.STRING,
      major_operator: DataTypes.STRING,
      system_length: DataTypes.DOUBLE,
      total_station_no: DataTypes.INTEGER,
      fright_cargo_no: DataTypes.INTEGER,
      transport_cargo_no: DataTypes.INTEGER,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "Railway",
      tableName: "railways"
    }
  );
  return Railway;
};
