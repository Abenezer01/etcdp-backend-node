'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EmploymentIncomeDetails113Cs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      applicantinformation_id: {
        type: Sequelize.STRING
      },
      current_employer: {
        type: Sequelize.STRING
      },
      employment_type: {
        type: Sequelize.STRING
      },
      job_title: {
        type: Sequelize.STRING
      },
      monthly_income: {
        type: Sequelize.DOUBLE
      },
      additional_sources_of_income: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('EmploymentIncomeDetails113Cs');
  }
};