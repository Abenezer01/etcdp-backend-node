'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FinancialDetail126Ds', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      requested_loan_amount: {
        type: Sequelize.DOUBLE
      },
      replayment_period: {
        type: Sequelize.INTEGER
      },
      interest: {
        type: Sequelize.DOUBLE
      },
      estimated_project_cost: {
        type: Sequelize.DOUBLE
      },
      other_financial_assistance: {
        type: Sequelize.DOUBLE
      },
      required_grant_amount: {
        type: Sequelize.DOUBLE
      },
      project_benefits: {
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
    await queryInterface.dropTable('FinancialDetail126Ds');
  }
};