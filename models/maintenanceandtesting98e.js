'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaintenanceAndTesting98E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MaintenanceAndTesting98E.init({
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
    maintenance_activity: DataTypes.STRING,
    recent_maintenance_activity: DataTypes.STRING,
    test_procedure: DataTypes.STRING,
    maintenance_contract_agreement: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'MaintenanceAndTesting98E',
      tableName: 'MaintenanceAndTesting98Es',
  });
  return MaintenanceAndTesting98E;
};