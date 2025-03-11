'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrafficParameter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrafficParameter.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pedestrian_facility_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    parking: DataTypes.INTEGER,
    design_traffic_flow: DataTypes.INTEGER,
    design_speed: DataTypes.DOUBLE,
    similar_for_all: DataTypes.BOOLEAN
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'TrafficParameter',
    tableName: 'TrafficParameters',
  });
  return TrafficParameter;
};