'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActivityLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ActivityLog.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    action: DataTypes.STRING,
    module: DataTypes.STRING,
    target_id: DataTypes.UUID,
    target_type: DataTypes.STRING,
    ip_address: DataTypes.STRING,
    user_agent: DataTypes.STRING
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,  
    sequelize,
    modelName: 'ActivityLog',
    tableName: 'ActivityLogs',
  });
  return ActivityLog;
};