'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ElectricGridControlCenterCyberSecurityData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ElectricGridControlCenterCyberSecurityData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    electric_grid_control_center_data_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cyber_security_measures_implemented: DataTypes.BOOLEAN,
    cyber_security_measures_type: {
      type: DataTypes.UUID,
      allowNull: false
    },
    cyber_security_audits_frequency: {
      type: DataTypes.UUID,
      allowNull: false
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'ElectricGridControlCenterCyberSecurityData',
    tableName: 'ElectricGridControlCenterCyberSecurityData',
  });
  return ElectricGridControlCenterCyberSecurityData;
};