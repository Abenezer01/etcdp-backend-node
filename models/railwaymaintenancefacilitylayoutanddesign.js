'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayMaintenanceFacilityLayoutAndDesign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayMaintenanceFacilityLayoutAndDesign.init({
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
    facility_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    facility_layout_and_dimension: DataTypes.TEXT,
    maintenance_bays_number_and_size: DataTypes.STRING,
    spare_parts_and_equipment_storage_areas: DataTypes.STRING,
    office_and_administrative_areas_availability: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayMaintenanceFacilityLayoutAndDesign',
    tableName: 'RailwayMaintenanceFacilityLayoutAndDesigns'
  });
  return RailwayMaintenanceFacilityLayoutAndDesign;
};