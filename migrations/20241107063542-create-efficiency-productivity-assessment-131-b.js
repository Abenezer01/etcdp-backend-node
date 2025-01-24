'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EfficiencyProductivityAssessment131Bs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      project_related_research_id: {
        type: Sequelize.UUID
      },
      automation_and_robotics: {
        type: Sequelize.BOOLEAN
      },
      automation_and_robotics_impact: {
        type: Sequelize.BOOLEAN
      },
      digital_project_management: {
        type: Sequelize.BOOLEAN
      },
      digital_project_management_impact: {
        type: Sequelize.BOOLEAN
      },
      modular_construction: {
        type: Sequelize.BOOLEAN
      },
      modular_construction_impact: {
        type: Sequelize.TEXT
      },
      lean_construction_practices: {
        type: Sequelize.BOOLEAN
      },
      lean_construction_impact: {
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
    await queryInterface.dropTable('EfficiencyProductivityAssessment131Bs');
  }
};