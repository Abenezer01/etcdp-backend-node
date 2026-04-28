'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CulvertBasicData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CulvertBasicData.belongsTo(models.ProjectMasterData, {
        foreignKey: 'area_topography_id',
        as: 'areaTopography'
      });
      CulvertBasicData.belongsTo(models.RoadSegment, {
        foreignKey: 'road_segment_id',
        as: 'roadSegment'
      });
    }
  }
  CulvertBasicData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    road_segment_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    culvert_number: DataTypes.INTEGER,
    culvert_coordinate_x: DataTypes.DOUBLE,
    culvert_coordinate_y: DataTypes.DOUBLE,
    area_topography_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    highest_water_level: DataTypes.DOUBLE,
    lowest_water_level: DataTypes.DOUBLE,
    construction_year: DataTypes.INTEGER,
    contractor: DataTypes.STRING,
    designer: DataTypes.STRING,
    culvert_cost: DataTypes.DOUBLE,
    detour_possibility: DataTypes.BOOLEAN,
    road_allignment: DataTypes.STRING,
    altitude: DataTypes.DOUBLE
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'CulvertBasicData',
    tableName: 'CulvertBasicData',
  });
  return CulvertBasicData;
};