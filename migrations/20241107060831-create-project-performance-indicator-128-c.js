'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectPerformanceIndicator128Cs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_id: {
        type: Sequelize.UUID
      },
      schedule: {
        type: Sequelize.TEXT
      },
      cost: {
        type: Sequelize.TEXT
      },
      quality: {
        type: Sequelize.TEXT
      },
      safety: {
        type: Sequelize.TEXT
      },
      performance_measure: {
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
    await queryInterface.dropTable('ProjectPerformanceIndicator128Cs');
  }
};