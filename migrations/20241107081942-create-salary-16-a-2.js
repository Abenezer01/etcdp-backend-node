'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Salary16A2s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      organization_id: {
        type: Sequelize.STRING
      },
      professional_level: {
        type: Sequelize.STRING,
      },
      study_field_id: {
        type: Sequelize.STRING
      },
      education_level_id: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      average_daily_wage: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('Salary16A2s');
  }
};