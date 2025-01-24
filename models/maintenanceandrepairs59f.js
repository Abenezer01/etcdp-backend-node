'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaintenanceAndRepairs59F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MaintenanceAndRepairs59F.init({
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
    maintenance_frequency: DataTypes.INTEGER,
    service_level_agreement: DataTypes.BOOLEAN,
    comment: DataTypes.TEXT,
    attach_image: DataTypes.BLOB,
    attach_report: DataTypes.BLOB
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'MaintenanceAndRepairs59F',
      tableName: 'MaintenanceAndRepairs59Fs',
  });
  return MaintenanceAndRepairs59F;
};