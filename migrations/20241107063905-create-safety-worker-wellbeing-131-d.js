'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SafetyWorkerWellbeing131Ds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_related_research_id: {
        type: Sequelize.UUID
      },
      advanced_safety_technologies: {
        type: Sequelize.TEXT
      },
      advanced_safety_technologies_impact: {
        type: Sequelize.TEXT
      },
      improved_ergonomics: {
        type: Sequelize.TEXT
      },
      mental_health_awareness: {
        type: Sequelize.TEXT
      },
      skilled_workforce_development: {
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
    await queryInterface.dropTable('SafetyWorkerWellbeing131Ds');
  }
};