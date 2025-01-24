'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AdditionalInformation114Fs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      
      project_detail_id: {
        type: Sequelize.UUID
      },
      guarantee_purpose: {
        type: Sequelize.TEXT
      },
      specific_requirements_criteria: {
        type: Sequelize.TEXT
      },
      project_contract_guidelines: {
        type: Sequelize.STRING
      },
      contractors_financial_statements: {
        type: Sequelize.STRING
      },
      bank_or_insurance_company_documents: {
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
    await queryInterface.dropTable('AdditionalInformation114Fs');
  }
};