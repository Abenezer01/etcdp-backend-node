'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DesignStandard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DesignStandard.belongsTo(models.ProjectMasterData, {
        foreignKey: 'functional_classification_id',
        as: 'functionalClassification'
      })

      DesignStandard.belongsTo(models.ProjectMasterData, {
        foreignKey: 'design_classification_id',
        as: 'designClassification'
      })

      DesignStandard.belongsTo(models.ProjectMasterData, {
        foreignKey: 'design_standard_id',
        as: 'designStandard'
      })

      DesignStandard.belongsTo(models.ProjectMasterData, {
        foreignKey: 'design_traffic_flow_id',
        as: 'designTrafficFlow'
      })
    }
  }
  DesignStandard.init({
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
    functional_classification_id  : {
      type: DataTypes.UUID,
      allowNull: false
    },
    design_classification_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    design_standard_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    design_traffic_flow_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    design_life_time_years: {
      type: DataTypes.DOUBLE
    },
    segment_number: {
      type: DataTypes.INTEGER
    },
    remark: DataTypes.TEXT,  
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'DesignStandard',
    tableName: 'DesignStandards'
  });
  return DesignStandard;
};