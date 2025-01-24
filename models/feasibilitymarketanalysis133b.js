'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeasibilityMarketAnalysis133B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FeasibilityMarketAnalysis133B.init({
    project_id: DataTypes.UUID,
    target_market: DataTypes.TEXT,
    market_demand: DataTypes.BOOLEAN,
    competition: DataTypes.TEXT,
    market_risks: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'FeasibilityMarketAnalysis133B',
      tableName: 'FeasibilityMarketAnalysis133Bs',
  });
  return FeasibilityMarketAnalysis133B;
};