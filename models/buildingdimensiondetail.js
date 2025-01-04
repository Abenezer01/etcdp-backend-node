"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BuildingDimensionDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models*/) {
      // define association here
    }
  }
  BuildingDimensionDetail.init(
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
      site_area: DataTypes.DOUBLE,
      site_above_sea_level: DataTypes.DOUBLE,
      ground_floor_area: DataTypes.DOUBLE,
      total_floor_area: DataTypes.DOUBLE,
      basement_stories_no: DataTypes.INTEGER,
      above_ground_floor_stories_no: DataTypes.INTEGER,
      height_above_natural_ground: DataTypes.DOUBLE,
      depth_below_natural_ground: DataTypes.DOUBLE,
      file_id: DataTypes.STRING,
      remark: DataTypes.TEXT,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "BuildingDimensionDetail",
      tableName: "buildingdimensiondetails"
    }
  );
  return BuildingDimensionDetail;
};
