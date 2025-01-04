'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GeneralAssessment130Bs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_related_research_id: {
        type: Sequelize.UUID
      },
      relevance_to_industry_needs: {
        type: Sequelize.TEXT
      },
      potential_impact: {
        type: Sequelize.TEXT
      },
      methodology_soundness: {
        type: Sequelize.TEXT
      },
      feasibility_and_applicability: {
        type: Sequelize.TEXT
      },
      dissemination_plan: {
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
    await queryInterface.dropTable('GeneralAssessment130Bs');
  }
};