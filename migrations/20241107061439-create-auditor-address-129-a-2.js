'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AuditorAddress129A2s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      principal_auditor_id: {
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
    await queryInterface.dropTable('AuditorAddress129A2s');
  }
};