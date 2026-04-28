'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayTrackSafety extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define associatio  n here
      // RailwayTrackSafety.belongsTo(models.ProjectMasterData, {
      //   foreignKey: 'project_id',
      //   as: 'project'
      // })

      RailwayTrackSafety.belongsTo(models.ProjectMasterData, {
        foreignKey: 'railway_track_safety_measures_id',
        as: 'railwayTrackSafetyMeasure'
      })

      RailwayTrackSafety.belongsTo(models.ProjectMasterData, {
        foreignKey: 'track_inspection_frequency_id',
        as: 'trackInspectionFrequency'
      })
    }
  }
  RailwayTrackSafety.init({
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
    railway_track_safety_measures_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    track_inspection_frequency_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    is_compliant_with_safety_regulations_standards: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayTrackSafety',
    tableName: 'RailwayTrackSafeties',
  });
  return RailwayTrackSafety;
};