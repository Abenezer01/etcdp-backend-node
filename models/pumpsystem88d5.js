'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PumpSystem88D5 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PumpSystem88D5.init({
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
    number_of_pumps: DataTypes.INTEGER,
    number_of_booster_pumps: DataTypes.INTEGER,
    type_of_pump: DataTypes.STRING,
    power_source: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'PumpSystem88D5',
      tableName: 'PumpSystem88D5s',
  });
  return PumpSystem88D5;
};