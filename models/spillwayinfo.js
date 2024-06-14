"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SpillwayInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SpillwayInfo.init(
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
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      specifications: DataTypes.TEXT,
      capacity: DataTypes.DOUBLE,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at' ,     
      sequelize,
      modelName: "SpillwayInfo",
      tableName: "spillwayinfos"
    }
  );
  return SpillwayInfo;
};
