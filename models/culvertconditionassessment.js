'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CulvertConditionAssessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CulvertConditionAssessment.belongsTo(models.CulvertBasicData, {
        foreignKey: 'culvert_basic_data_id',
        as: 'culvertBasicData'
      });
      CulvertConditionAssessment.belongsTo(models.RoadSegment, {
        foreignKey: 'road_segment_id',
        as: 'roadSegment'
      });

      CulvertConditionAssessment.belongsTo(models.ProjectMasterData, {
        foreignKey: 'structure_type_id',
        as: 'structureType'
      });
      CulvertConditionAssessment.belongsTo(models.ProjectMasterData, {
        foreignKey: 'north_id',
        as: 'north'
      });
      CulvertConditionAssessment.belongsTo(models.ProjectMasterData, {
        foreignKey: 'east_id',
        as: 'east'
      });
      CulvertConditionAssessment.belongsTo(models.ProjectMasterData, {
        foreignKey: 'west_id',
        as: 'west'
      });
      CulvertConditionAssessment.belongsTo(models.ProjectMasterData, {
        foreignKey: 'south_id',
        as: 'south'
      });
      CulvertConditionAssessment.belongsTo(models.ProjectMasterData, {
        foreignKey: 'central_id',
        as: 'central'
      });
    }
  }
  CulvertConditionAssessment.init({
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
    culvert_basic_data_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    road_segment_id: {
      type: DataTypes.UUID,
      allowNull: false,
    }, 
    structure_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    north_id: DataTypes.UUID,
    east_id: DataTypes.UUID,
    west_id: DataTypes.UUID,
    south_id: DataTypes.UUID,
    central_id: DataTypes.UUID,
    assessment_date: DataTypes.DATE
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'CulvertConditionAssessment',
    tableName: 'CulvertConditionAssessments',
  });
  return CulvertConditionAssessment;
};