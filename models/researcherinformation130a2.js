'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResearcherInformation130A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResearcherInformation130A2.init({
    project_related_research_id: DataTypes.UUID,
    full_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ResearcherInformation130A2',
      tableName: 'ResearcherInformation130A2s',
  });
  return ResearcherInformation130A2;
};