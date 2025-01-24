'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ResearchInnovationWork127A1s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      date_collected: {
        type: Sequelize.DATE
      },
      title: {
        type: Sequelize.STRING
      },
      reference_id: {
        type: Sequelize.STRING
      },
      ip_owner_name: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('ResearchInnovationWork127A1s');
  }
};