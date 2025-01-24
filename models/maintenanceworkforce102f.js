'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaintenanceWorkforce102F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MaintenanceWorkforce102F.init({
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
    number_of_maintenance_personnel: DataTypes.INTEGER,
    staff_facilities: DataTypes.STRING,
    training_facilities_and_resources: DataTypes.STRING,
    number_of_trainers_instructors: DataTypes.INTEGER
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'MaintenanceWorkforce102F',
      tableName: 'MaintenanceWorkforce102Fs',
  });
  return MaintenanceWorkforce102F;
};