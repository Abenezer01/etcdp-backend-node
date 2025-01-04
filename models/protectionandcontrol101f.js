'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProtectionAndControl101F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProtectionAndControl101F.init({
    id: DataTypes.UUID,
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    protection_system: DataTypes.STRING,
    control_monitoring_equipment: DataTypes.STRING,
    scada_system: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProtectionAndControl101F',
  });
  return ProtectionAndControl101F;
};