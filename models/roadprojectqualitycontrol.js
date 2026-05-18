'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoadProjectQualityControl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RoadProjectQualityControl.belongsTo(models.ProjectMasterData, {
        foreignKey: 'inspection_type_id',
        as: 'inspectionType'
      })
      RoadProjectQualityControl.belongsTo(models.ProjectMasterData, {
        foreignKey: 'project_phase_id',
        as: 'projectPhase'
      })
    }
  }
  RoadProjectQualityControl.init({
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    project_phase_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    inspection_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    defect_encountered: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RoadProjectQualityControl',
    tableName: 'RoadProjectQualityControls',
  });
  return RoadProjectQualityControl;
};