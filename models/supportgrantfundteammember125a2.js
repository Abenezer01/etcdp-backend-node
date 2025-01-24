'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SupportGrantFundTeamMember125A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SupportGrantFundTeamMember125A2.init({
    support_grant_fund_id: DataTypes.UUID,
    full_name: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'SupportGrantFundTeamMember125A2',
      tableName: 'SupportGrantFundTeamMember125A2s',
  });
  return SupportGrantFundTeamMember125A2;
};