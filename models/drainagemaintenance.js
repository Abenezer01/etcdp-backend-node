'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DrainageMaintenance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DrainageMaintenance.belongsTo(models.RoadSegment, {
        foreignKey: 'road_segment_id',
        as: 'roadSegment'
      })
      DrainageMaintenance.belongsTo(models.ProjectMasterData, {
        foreignKey: 'soil_type_id',
        as: 'soilType'
      })
      DrainageMaintenance.belongsTo(models.ProjectMasterData, {
        foreignKey: 'ground_water_impact_id',
        as: 'groundWaterImpact'
      })
      DrainageMaintenance.belongsTo(models.ProjectMasterData, {
        foreignKey: 'slope_stability_id',
        as: 'slopeStability'
      })

    }
  }
  DrainageMaintenance.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    road_segment_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    soil_type_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    ground_water_impact_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    soil_bearing_capacity: DataTypes.STRING,
    slope_stability_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    retaining_walls: DataTypes.BOOLEAN,
    geological_hazard: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'DrainageMaintenance',
    tableName: 'DrainageMaintenances'
  });
  return DrainageMaintenance;
};