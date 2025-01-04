'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FacilityLayoutDesign102C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FacilityLayoutDesign102C.init({
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
    facility_layout_and_dimensions: DataTypes.STRING,
    number_and_size_of_maintenance_bays_or_tracks: DataTypes.STRING,
    storage_areas_for_spare_parts_and_equipment: DataTypes.STRING,
    office_and_administrative_areas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FacilityLayoutDesign102C',
  });
  return FacilityLayoutDesign102C;
};