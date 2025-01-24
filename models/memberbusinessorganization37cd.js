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
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    stakeholder_id: DataTypes.STRING,
    grade: DataTypes.STRING,
    business_organization_name: DataTypes.STRING,
    number_of_member: DataTypes.INTEGER
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'MemberBusinessOrganization37CD',
      tableName: 'MemberBusinessOrganization37CDs',
  });
  return MemberBusinessOrganization37CD;
};