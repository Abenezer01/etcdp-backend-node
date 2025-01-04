'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContractorResearchAssessment130Cs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_related_research_id: {
        type: Sequelize.UUID
      },
      focus_of_research: {
        type: Sequelize.STRING
      },
      cost_savings_potential: {
        type: Sequelize.BOOLEAN
      },
      schedule_optimization: {
        type: Sequelize.BOOLEAN
      },
      risk_mitigation_strategies: {
        type: Sequelize.TEXT
      },
      safety_improvements: {
        type: Sequelize.BOOLEAN
      },
      ease_of_implementation: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('ContractorResearchAssessment130Cs');
  }
};