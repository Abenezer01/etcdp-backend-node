'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StakeholderResearchAssessment130Ds', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      project_related_research_id: {
        type: Sequelize.UUID
      },
      focus_of_research: {
        type: Sequelize.STRING
      },
      sustainability: {
        type: Sequelize.BOOLEAN
      },
      social_impact: {
        type: Sequelize.TEXT
      },
      public_safety: {
        type: Sequelize.BOOLEAN
      },
      long_term_performance: {
        type: Sequelize.BOOLEAN
      },
      user_experience: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('StakeholderResearchAssessment130Ds');
  }
};