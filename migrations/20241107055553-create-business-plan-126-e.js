'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BusinessPlan126Es', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      summary: {
        type: Sequelize.TEXT
      },
      project_details: {
        type: Sequelize.TEXT
      },
      market_analysis: {
        type: Sequelize.TEXT
      },
      financial_projection: {
        type: Sequelize.TEXT
      },
      risk_assessment: {
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
    await queryInterface.dropTable('BusinessPlan126Es');
  }
};