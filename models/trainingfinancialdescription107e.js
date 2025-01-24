'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainingFinancialDescription107E extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrainingFinancialDescription107E.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    financial_aid_investment_opportunity_id: DataTypes.STRING,
    amount_of_investment_funding_provided: DataTypes.DOUBLE,
    construction_related_activities_of_interest: DataTypes.TEXT,
    previous_construction_related_investments: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'TrainingFinancialDescription107E',
      tableName: 'TrainingFinancialDescription107Es',
  });
  return TrainingFinancialDescription107E;
};