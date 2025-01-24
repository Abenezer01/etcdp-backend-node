'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ApplicantInformation113As', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      id: {
        type: Sequelize.STRING
      },
      full_name: {
        type: Sequelize.STRING
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      contact_number: {
        type: Sequelize.STRING
      },
      email_address: {
        type: Sequelize.STRING
      },
      id_passport_number: {
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
    await queryInterface.dropTable('ApplicantInformation113As');
  }
};