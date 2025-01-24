'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EquipmentAndTools102D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EquipmentAndTools102D.init({
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
    types_of_maintenance_equipment_and_tools_available: DataTypes.STRING,
    hoists_cranes_and_lifting_equipment: DataTypes.STRING,
    diagnostic_and_testing_equipment: DataTypes.STRING,
    tools_and_machinery_specific_to_maintenance_activities: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'EquipmentAndTools102D',
      tableName: 'EquipmentAndTools102Ds',
  });
  return EquipmentAndTools102D;
};