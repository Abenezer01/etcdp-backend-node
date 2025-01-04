'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PassengerFlowAndCapacity100H extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PassengerFlowAndCapacity100H.init({
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
    passenger_flow_analysis: DataTypes.TEXT,
    capacity_assessment: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'PassengerFlowAndCapacity100H',
  });
  return PassengerFlowAndCapacity100H;
};