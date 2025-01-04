'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FinancialSupportDescription111Es', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      financial_support_type: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DOUBLE
      },
      currency: {
        type: Sequelize.STRING
      },
      eligibility_requirements: {
        type: Sequelize.TEXT
      },
      application_process: {
        type: Sequelize.TEXT
      },
      approval_process: {
        type: Sequelize.TEXT
      },
      disbursement_process: {
        type: Sequelize.TEXT
      },
      term_and_condition: {
        type: Sequelize.TEXT
      },
      reporting_monitoring_requirement: {
        type: Sequelize.TEXT
      },
      success_stories: {
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
    await queryInterface.dropTable('FinancialSupportDescription111Es');
  }
};