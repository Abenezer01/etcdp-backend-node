'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ResearchDetail127Ds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      research_innovation_work_id: {
        type: Sequelize.UUID
      },
      objective: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      output: {
        type: Sequelize.TEXT
      },
      attached_report: {
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
    await queryInterface.dropTable('ResearchDetail127Ds');
  }
};