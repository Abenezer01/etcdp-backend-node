'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StakeholderOwnerOrManager26ABs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      stakeholder_id: {
        type: Sequelize.UUID
      },
      type: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      middle_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      partnership_size: {
        type: Sequelize.DOUBLE
      },
      identification_document: {
        type: Sequelize.STRING
      },
      certificate: {
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
    await queryInterface.dropTable('StakeholderOwnerOrManager26ABs');
  }
};