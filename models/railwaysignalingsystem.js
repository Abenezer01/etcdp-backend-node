'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwaySignalingSystem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwaySignalingSystem.init({
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
    signaling_system_type: DataTypes.STRING,
    signaling_system_manufacturer_or_supplier_name: DataTypes.STRING,
    signaling_system_manufacturer_or_supplier_phone: DataTypes.STRING,
    signaling_system_components: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwaySignalingSystem',
    tableName: 'RailwaySignalingSystems',
  });
  return RailwaySignalingSystem;
};