'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificate47A31 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Certificate47A31.init({
    id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    certificate_type: DataTypes.STRING,
    scope: DataTypes.STRING,
    certifying_body: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    certificate_number: DataTypes.STRING,
    issued_date: DataTypes.DATE,
    expire_date: DataTypes.DATE,
    remark: DataTypes.TEXT,
    reference_files: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Certificate47A31',
  });
  return Certificate47A31;
};