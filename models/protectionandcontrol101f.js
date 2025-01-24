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
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    protection_system: DataTypes.STRING,
    control_monitoring_equipment: DataTypes.STRING,
    scada_system: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ProtectionAndControl101F',
      tableName: 'ProtectionAndControl101Fs',
  });
  return ProtectionAndControl101F;
};