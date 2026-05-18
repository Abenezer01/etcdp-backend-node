'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolePermissionView extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RolePermissionView.init({
    role_id: DataTypes.UUID,
    permission_name: DataTypes.STRING
  }, {
    
    timestamps: false,
    sequelize,
    modelName: 'RolePermissionView',
    tableName: 'RolePermissionView',
  });
  return RolePermissionView;
};