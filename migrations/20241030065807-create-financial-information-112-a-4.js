'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FinancialInformation112A4s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      id: {
        type: Sequelize.STRING
      },
      applicationform_id: {
        type: Sequelize.STRING
      },
      total_annual_revenue: {
        type: Sequelize.DOUBLE
      },
      total_profit: {
        type: Sequelize.DOUBLE
      },
      total_assets: {
        type: Sequelize.DOUBLE
      },
      total_liabilities: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('FinancialInformation112A4s');
  }
};