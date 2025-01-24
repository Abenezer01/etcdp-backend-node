'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EquipmentDetail112A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EquipmentDetail112A2.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    applicationform_id: DataTypes.STRING,
    machinery_type: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    year_of_manufacture: DataTypes.INTEGER,
    equipment_value: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'EquipmentDetail112A2',
      tableName: 'EquipmentDetail112A2s',
  });
  return EquipmentDetail112A2;
};