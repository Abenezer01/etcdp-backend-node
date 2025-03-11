'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfessionalAssociationMembership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfessionalAssociationMembership.init({
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
    association_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    membership_type: DataTypes.STRING,
    position: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize,
    modelName: 'ProfessionalAssociationMembership',
    tableName: 'ProfessionalAssociationMemberships'
  });
  return ProfessionalAssociationMembership;
};