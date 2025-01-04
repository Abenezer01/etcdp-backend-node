'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GraduatedStudentInForeignCountry5As', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stakeholder_id: {
        type: Sequelize.UUID
      },
      study_level_id: {
        type: Sequelize.UUID
      },
      study_program_id: {
        type: Sequelize.UUID
      },
      study_field_id: {
        type: Sequelize.UUID
      },
      age_group_id: {
        type: Sequelize.UUID
      },
      male: {
        type: Sequelize.STRING
      },
      female: {
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
    await queryInterface.dropTable('GraduatedStudentInForeignCountry5As');
  }
};