'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuditorAddress129A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuditorAddress129A2.init({
    principal_auditor_id: DataTypes.UUID,
    region: DataTypes.STRING,
    zone: DataTypes.STRING,
    woreda: DataTypes.STRING,
    city: DataTypes.STRING,
    local_site: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'AuditorAddress129A2',
      tableName: 'AuditorAddress129A2s'
  });
  return AuditorAddress129A2;
};