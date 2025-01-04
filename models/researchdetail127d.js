'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResearchDetail127D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResearchDetail127D.init({
    research_innovation_work_id: DataTypes.UUID,
    objective: DataTypes.TEXT,
    description: DataTypes.TEXT,
    output: DataTypes.TEXT,
    attached_report: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ResearchDetail127D',
  });
  return ResearchDetail127D;
};