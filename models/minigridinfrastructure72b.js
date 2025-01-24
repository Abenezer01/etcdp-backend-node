'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MinigridInfrastructure72B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MinigridInfrastructure72B.init({
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
    type_of_system: DataTypes.STRING,
    inverter: DataTypes.STRING,
    minigrid_size: DataTypes.DOUBLE,
    system_voltage: DataTypes.DOUBLE,
    battery_type: DataTypes.STRING,
    expected_annual_generation: DataTypes.DOUBLE,
    battery_size: DataTypes.DOUBLE,
    is_equipped_with_standby_diesel_generator: DataTypes.BOOLEAN
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'MinigridInfrastructure72B',
      tableName: 'MinigridInfrastructure72Bs',
  });
  return MinigridInfrastructure72B;
};