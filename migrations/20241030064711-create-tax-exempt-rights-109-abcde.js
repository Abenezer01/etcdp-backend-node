'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TaxExemptRights109ABCDEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      tax_type: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      eligibility_criteria: {
        type: Sequelize.TEXT
      },
      required_documents: {
        type: Sequelize.TEXT
      },
      duration_of_exemption: {
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
    await queryInterface.dropTable('TaxExemptRights109ABCDEs');
  }
};