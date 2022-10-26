'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class certificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  certificate.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    certificate_no: DataTypes.STRING,
    date_of_issue: DataTypes.DATE,
    expiry_date: DataTypes.UUID,
    initial_certificate_no: DataTypes.STRING,
    initial_certificate_issue_date: DataTypes.DATE,
    revision_no: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'certificate',
  });
  return certificate;
};