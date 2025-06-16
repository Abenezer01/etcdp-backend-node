'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IrrigationAndDrainageData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IrrigationAndDrainageData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    general_dam_information_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    water_source_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    gross_command_area: DataTypes.DOUBLE,
    net_irrigated_area: DataTypes.DOUBLE,
    project_target_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    headwork_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    irrigation_technology_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    overall_irrigation_efficiency: DataTypes.DOUBLE,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'IrrigationAndDrainageData',
    tableName: 'IrrigationAndDrainageData',
  });
  return IrrigationAndDrainageData;
};