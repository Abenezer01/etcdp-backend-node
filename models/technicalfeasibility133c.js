'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TechnicalFeasibility133C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TechnicalFeasibility133C.init({
    project_id: DataTypes.UUID,
    site_analysis: DataTypes.TEXT,
    design_construction_considerations: DataTypes.TEXT,
    project_schedule: DataTypes.STRING,
    technical_risks: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TechnicalFeasibility133C',
  });
  return TechnicalFeasibility133C;
};