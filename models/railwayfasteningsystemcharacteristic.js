'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayFasteningSystemCharacteristic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayFasteningSystemCharacteristic.init({
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
    railway_line_section_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    used_fastening_system_type: DataTypes.STRING,
    fastening_system_manufacturer_supplier: DataTypes.STRING,
    fastening_system_specifications: DataTypes.STRING,
    rail_clips_or_clamps_details: DataTypes.TEXT,
    bolts_and_nuts_specifications: DataTypes.TEXT,
    other_fastening_system: DataTypes.TEXT,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayFasteningSystemCharacteristic',
    tableName: 'RailwayFasteningSystemCharacteristics',
  });
  return RailwayFasteningSystemCharacteristic;
};