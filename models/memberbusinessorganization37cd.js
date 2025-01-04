'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberBusinessOrganization37CD extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MemberBusinessOrganization37CD.init({
    id: DataTypes.STRING,
    stakeholder_id: DataTypes.STRING,
    grade: DataTypes.STRING,
    business_organization_name: DataTypes.STRING,
    number_of_member: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MemberBusinessOrganization37CD',
  });
  return MemberBusinessOrganization37CD;
};