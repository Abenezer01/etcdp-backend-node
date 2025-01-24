'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CreditFacilityApplicantInformation112A1s', {
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
      company_name: {
        type: Sequelize.STRING
      },
      contact_number: {
        type: Sequelize.STRING
      },
      email_address: {
        type: Sequelize.STRING
      },
      business_address: {
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
    await queryInterface.dropTable('CreditFacilityApplicantInformation112A1s');
  }
};