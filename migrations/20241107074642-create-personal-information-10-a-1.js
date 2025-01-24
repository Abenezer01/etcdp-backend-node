'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PersonalInformation10A1s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      candidate_personal_information_id: {
        type: Sequelize.UUID
      },
      full_name: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATE
      },
      nationality: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      id_no: {
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
    await queryInterface.dropTable('PersonalInformation10A1s');
  }
};