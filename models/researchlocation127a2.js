'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResearchLocation127A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResearchLocation127A2.init({
    research_innovation_work_id: DataTypes.UUID,
    region: DataTypes.STRING,
    zone: DataTypes.STRING,
    woreda: DataTypes.STRING,
    city: DataTypes.STRING,
    local_site: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ResearchLocation127A2',
  });
  return ResearchLocation127A2;
};