'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfessionalAdditionalInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfessionalAdditionalInformation.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    professional_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    additional_information: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reference: DataTypes.STRING
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,
    sequelize,
    modelName: 'ProfessionalAdditionalInformation',
    tableName: 'ProfessionalAdditionalInformations'
  });
  return ProfessionalAdditionalInformation;
};