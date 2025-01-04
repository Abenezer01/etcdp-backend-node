'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ResearchLocation127A2s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      research_innovation_work_id: {
        type: Sequelize.UUID
      },
      region: {
        type: Sequelize.STRING
      },
      zone: {
        type: Sequelize.STRING
      },
      woreda: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      local_site: {
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
    await queryInterface.dropTable('ResearchLocation127A2s');
  }
};