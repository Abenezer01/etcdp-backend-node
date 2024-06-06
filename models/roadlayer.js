"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoadLayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RoadLayer.belongsTo(models.RoadSegment, {
        foreignKey: "segment_id",
        as: "roadsegment"
      });
    }
  }
  RoadLayer.init(
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
      segment_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      name: DataTypes.STRING,
      number: DataTypes.INTEGER,
      thickeness: DataTypes.DOUBLE,
      material: DataTypes.STRING,
      specifications: DataTypes.STRING,
      description: DataTypes.TEXT,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "RoadLayer",
      tableName: "roadlayers"
    }
  );
  return RoadLayer;
};
