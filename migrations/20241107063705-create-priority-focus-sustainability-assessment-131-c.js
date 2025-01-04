'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PriorityFocusSustainabilityAssessment131Cs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_related_research_id: {
        type: Sequelize.UUID
      },
      sustainable_materials_practices: {
        type: Sequelize.BOOLEAN
      },
      sustainable_materials_practices_description: {
        type: Sequelize.TEXT
      },
      circular_economy_principles: {
        type: Sequelize.BOOLEAN
      },
      circular_economy_principles_description: {
        type: Sequelize.TEXT
      },
      low_impact_construction_techniques: {
        type: Sequelize.BOOLEAN
      },
      low_impact_construction_techniques_description: {
        type: Sequelize.TEXT
      },
      building_lifecycle_assessment: {
        type: Sequelize.BOOLEAN
      },
      building_lifecycle_assessment_description: {
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
    await queryInterface.dropTable('PriorityFocusSustainabilityAssessment131Cs');
  }
};