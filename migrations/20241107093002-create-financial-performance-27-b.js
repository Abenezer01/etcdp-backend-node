'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FinancialPerformance27Bs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      
      stakeholder_id: {
        type: Sequelize.UUID
      },
      year: {
        type: Sequelize.INTEGER
      },
      construction_income: {
        type: Sequelize.DOUBLE
      },
      expenses: {
        type: Sequelize.DOUBLE
      },
      gross_profit_loss: {
        type: Sequelize.DOUBLE
      },
      non_current_assets: {
        type: Sequelize.DOUBLE
      },
      current_assets: {
        type: Sequelize.DOUBLE
      },
      capital_reserves: {
        type: Sequelize.DOUBLE
      },
      non_current_liabilities: {
        type: Sequelize.DOUBLE
      },
      current_liabilities: {
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
    await queryInterface.dropTable('FinancialPerformance27Bs');
  }
};