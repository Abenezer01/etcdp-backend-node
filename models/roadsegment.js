"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoadSegment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models*/) {
      // define association here
    }
  }
  RoadSegment.init(
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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surface_type_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      start_northing: DataTypes.DOUBLE,
      start_easting: DataTypes.DOUBLE,
      end_northing: DataTypes.DOUBLE,
      end_easting: DataTypes.DOUBLE,
      design_standard_id: DataTypes.UUID,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "RoadSegment",
      tableName: "roadsegments"
    }
  );
  return RoadSegment;
};
