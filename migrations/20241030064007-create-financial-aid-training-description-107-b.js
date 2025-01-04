'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FinancialAidTrainingDescription107Bs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      financial_aid_investment_opportunity_id: {
        type: Sequelize.UUID
      },
      type_of_financial_aid: {
        type: Sequelize.STRING
      },
      eligibility_requirements: {
        type: Sequelize.STRING
      },
      duration_of_funding: {
        type: Sequelize.STRING
      },
      application_process: {
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
    await queryInterface.dropTable('FinancialAidTrainingDescription107Bs');
  }
};