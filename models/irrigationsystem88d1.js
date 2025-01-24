'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IrrigationSystem88D1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IrrigationSystem88D1.init({
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
    source_of_water: DataTypes.STRING,
    gross_command_area: DataTypes.DOUBLE,
    net_irrigated_area: DataTypes.DOUBLE,
    project_target: DataTypes.STRING,
    irrigation_technology: DataTypes.STRING,
    irrigation_efficiency: DataTypes.DOUBLE,
    status_of_scheme: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'IrrigationSystem88D1',
      tableName: 'IrrigationSystem88D1s',
  });
  return IrrigationSystem88D1;
};