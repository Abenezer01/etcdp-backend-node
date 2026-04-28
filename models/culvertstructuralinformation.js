'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CulvertStructuralInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CulvertStructuralInformation.belongsTo(models.CulvertBasicData, {
        foreignKey: 'culvert_id',
        as: 'culvert'
      })

      CulvertStructuralInformation.belongsTo(models.ProjectMasterData, {
        foreignKey: 'culvert_type_id',
        as: 'culvertType'
      }) 

      CulvertStructuralInformation.belongsTo(models.ProjectMasterData, {
        foreignKey: 'pier_type_id',
        as: 'pierType'
      }) 

      CulvertStructuralInformation.belongsTo(models.ProjectMasterData, {
        foreignKey: 'abutment_type_id',
        as: 'abutmentType'
      }) 

      CulvertStructuralInformation.belongsTo(models.ProjectMasterData, {
        foreignKey: 'endwall_type_inlet_id',
        as: 'endwallTypeInlet'
      }) 

      CulvertStructuralInformation.belongsTo(models.ProjectMasterData, {
        foreignKey: 'endwall_type_outlet_id',
        as: 'endwallTypeOutlet'
      }) 

      CulvertStructuralInformation.belongsTo(models.ProjectMasterData, {
        foreignKey: 'paved_water_way_type_id',
        as: 'pavedWaterWayType'
      })

      CulvertStructuralInformation.belongsTo(models.ProjectMasterData, {
        foreignKey: 'soil_type_id',
        as: 'soilType'
      })  

    }
  }
  CulvertStructuralInformation.init({
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
    culvert_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    culvert_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    culvert_barrel_length: DataTypes.DOUBLE,
    culvert_height: DataTypes.DOUBLE,
    opening_number: DataTypes.INTEGER,
    opening_width: DataTypes.DOUBLE,
    total_culvert_width: DataTypes.DOUBLE,
    distance_between_barrels: DataTypes.DOUBLE,
    head_wall_length: DataTypes.DOUBLE,
    pier_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    pier_height: DataTypes.DOUBLE,
    abutment_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    abutment_average_height: DataTypes.DOUBLE,
    endwall_type_inlet_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    endwall_type_outlet_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    wingwall_average_length: DataTypes.DOUBLE,
    paved_water_way_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    soil_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'CulvertStructuralInformation',
    tableName: 'CulvertStructuralInformations',
  });
  return CulvertStructuralInformation;
};