'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CustomsDutyFree124As', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        type: Sequelize.STRING
      },
      registration_number: {
        type: Sequelize.STRING
      },
      project_name: {
        type: Sequelize.STRING
      },
      project_location: {
        type: Sequelize.STRING
      },
      project_duration: {
        type: Sequelize.INTEGER
      },
      project_budget: {
        type: Sequelize.DOUBLE
      },
      import_export_activity: {
        type: Sequelize.TEXT
      },
      imported_items: {
        type: Sequelize.TEXT
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      customs_duty_exemption: {
        type: Sequelize.DOUBLE
      },
      tax_exemption: {
        type: Sequelize.STRING
      },
      supporting_document: {
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
    await queryInterface.dropTable('CustomsDutyFree124As');
  }
};