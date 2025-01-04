'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SupportingDocument126Fs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      financial_statements: {
        type: Sequelize.STRING
      },
      business_registration: {
        type: Sequelize.STRING
      },
      project_proposal: {
        type: Sequelize.STRING
      },
      quotes_estimates: {
        type: Sequelize.STRING
      },
      risk_assessment: {
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
    await queryInterface.dropTable('SupportingDocument126Fs');
  }
};