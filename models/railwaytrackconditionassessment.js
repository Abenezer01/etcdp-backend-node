'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayTrackConditionAssessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RailwayTrackConditionAssessment.belongsTo(models.RailwayTrackData, {
        foreignKey: 'railway_track_data_id',
        as: 'railwayTrackData'
      });
      RailwayTrackConditionAssessment.belongsTo(models.ProjectMasterData, {
        foreignKey: 'track_condition_rating_id',
        as: 'trackConditionRating'
      });
      RailwayTrackConditionAssessment.belongsTo(models.ProjectMasterData, {
        foreignKey: 'observed_defects_id',
        as: 'observedDefects'
      });
    }
  }
  RailwayTrackConditionAssessment.init({
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
    railway_track_data_id : {
      type: DataTypes.UUID,
      allowNull: false,
    },
    inspection_dates: DataTypes.DATE,
    track_condition_rating_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    observed_defects_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    track_settlement_irregularities: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayTrackConditionAssessment',
    tableName: 'RailwayTrackConditionAssessments',
  });
  return RailwayTrackConditionAssessment;
};