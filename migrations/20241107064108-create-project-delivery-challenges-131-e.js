'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectDeliveryChallenges131Es', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      project_related_research_id: {
        type: Sequelize.UUID
      },
      risk_management: {
        type: Sequelize.TEXT
      },
      collaboration_communication: {
        type: Sequelize.TEXT
      },
      dispute_resolution: {
        type: Sequelize.TEXT
      },
      client_satisfaction: {
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
    await queryInterface.dropTable('ProjectDeliveryChallenges131Es');
  }
};