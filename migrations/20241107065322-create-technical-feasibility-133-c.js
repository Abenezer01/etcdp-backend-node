'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TechnicalFeasibility133Cs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      project_id: {
        type: Sequelize.UUID
      },
      site_analysis: {
        type: Sequelize.TEXT
      },
      design_construction_considerations: {
        type: Sequelize.TEXT
      },
      project_schedule: {
        type: Sequelize.STRING
      },
      technical_risks: {
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
    await queryInterface.dropTable('TechnicalFeasibility133Cs');
  }
};