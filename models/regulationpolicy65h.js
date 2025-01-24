'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RegulationPolicy65H extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RegulationPolicy65H.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    regulatory_body: DataTypes.STRING,
    regulatory_compliance_monitoring: DataTypes.BOOLEAN,
    environmental_social_compliance_monitoring: DataTypes.BOOLEAN,
    licensing_permit_requirements: DataTypes.BOOLEAN
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'RegulationPolicy65H',
      tableName: 'RegulationPolicy65Hs',
  });
  return RegulationPolicy65H;
};