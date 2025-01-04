'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TrainingFinancialDescription107Es', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      financial_aid_investment_opportunity_id: {
        type: Sequelize.STRING
      },
      amount_of_investment_funding_provided: {
        type: Sequelize.DOUBLE
      },
      construction_related_activities_of_interest: {
        type: Sequelize.TEXT
      },
      previous_construction_related_investments: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TrainingFinancialDescription107Es');
  }
};