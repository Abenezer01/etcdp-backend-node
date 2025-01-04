'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FinancialInformation113Ds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      applicantinformation_id: {
        type: Sequelize.UUID
      },
      bank_name: {
        type: Sequelize.STRING
      },
      account_number: {
        type: Sequelize.STRING
      },
      bank_statements: {
        type: Sequelize.STRING
      },
      total_monthly_expenses: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('FinancialInformation113Ds');
  }
};