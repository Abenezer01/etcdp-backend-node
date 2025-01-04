'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrackRenewal94G extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrackRenewal94G.init({
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
    renewal_history: DataTypes.STRING,
    renewal_plan_schedule: DataTypes.STRING,
    method_used: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TrackRenewal94G',
  });
  return TrackRenewal94G;
};