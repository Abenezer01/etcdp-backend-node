'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfessionalContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfessionalContact.init({
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
    phone_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",     
    sequelize,
    modelName: 'ProfessionalContact',
    tableName: 'ProfessionalContacts'
  });
  return ProfessionalContact;
};