'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderAdditionalInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderAdditionalInformation.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    stakeholder_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    additional_information: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    reference: DataTypes.STRING
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,     
    sequelize,
    modelName: 'StakeholderAdditionalInformation',
    tableName: 'StakeholderAdditionalInformations',
  });
  return StakeholderAdditionalInformation;
};