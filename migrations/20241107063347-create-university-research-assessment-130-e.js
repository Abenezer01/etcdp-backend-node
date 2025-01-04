'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UniversityResearchAssessment130Es', {
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
      originality_and_innovation: {
        type: Sequelize.BOOLEAN
      },
      theoretical_significance: {
        type: Sequelize.BOOLEAN
      },
      contribution_to_knowledge: {
        type: Sequelize.TEXT
      },
      research_methodology_rigor: {
        type: Sequelize.BOOLEAN
      },
      potential_for_further_research: {
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
    await queryInterface.dropTable('UniversityResearchAssessment130Es');
  }
};