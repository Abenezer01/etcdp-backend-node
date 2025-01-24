'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SupportGrantFundRNDProjects125A1s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      duration_in_months: {
        type: Sequelize.INTEGER
      },
      total_budget: {
        type: Sequelize.DOUBLE
      },
      funding_agency_name: {
        type: Sequelize.STRING
      },
      grant_type: {
        type: Sequelize.STRING
      },
      grant_amount: {
        type: Sequelize.DOUBLE
      },
      approval_date: {
        type: Sequelize.DATE
      },
      project_lead_name: {
        type: Sequelize.STRING
      },
      objectives: {
        type: Sequelize.TEXT
      },
      expected_outcomes: {
        type: Sequelize.TEXT
      },
      evaluation_criteria: {
        type: Sequelize.TEXT
      },
      project_progress_updates: {
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
    await queryInterface.dropTable('SupportGrantFundRNDProjects125A1s');
  }
};