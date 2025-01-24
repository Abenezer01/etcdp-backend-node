'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PrincipalAuditor129A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PrincipalAuditor129A1.init({
    project_id: DataTypes.UUID,
    full_name: DataTypes.STRING,
    position_role: DataTypes.STRING,
    organization_name: DataTypes.STRING,
    department: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    audit_methodology: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'PrincipalAuditor129A1',
      tableName: 'PrincipalAuditor129A1s',
  });
  return PrincipalAuditor129A1;
};