'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FeasibilityMarketAnalysis133Bs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      project_id: {
        type: Sequelize.UUID
      },
      target_market: {
        type: Sequelize.TEXT
      },
      market_demand: {
        type: Sequelize.BOOLEAN
      },
      competition: {
        type: Sequelize.TEXT
      },
      market_risks: {
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
    await queryInterface.dropTable('FeasibilityMarketAnalysis133Bs');
  }
};