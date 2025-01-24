'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AdditionalInformation112Es', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      id: {
        type: Sequelize.STRING
      },
      applicationform_id: {
        type: Sequelize.STRING
      },
      business_description: {
        type: Sequelize.TEXT
      },
      equipment_contribution: {
        type: Sequelize.TEXT
      },
      date: {
        type: Sequelize.DATE
      },
      declaration: {
        type: Sequelize.TEXT
      },
      signature: {
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
    await queryInterface.dropTable('AdditionalInformation112Es');
  }
};