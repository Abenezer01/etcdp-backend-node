'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RegionalStatistic21As', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      organization_id: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      age_group_id: {
        type: Sequelize.STRING
      },
      address_level_id: {
        type: Sequelize.STRING
      },
      region_name: {
        type: Sequelize.STRING
      },
      professional_level: {
        type: Sequelize.STRING
      },
      male: {
        type: Sequelize.STRING
      },
      female: {
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
    await queryInterface.dropTable('RegionalStatistic21As');
  }
};