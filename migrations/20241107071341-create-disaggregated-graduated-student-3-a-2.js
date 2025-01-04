'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DisaggregatedGraduatedStudent3A2s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stakeholder_id: {
        type: Sequelize.STRING
      },
      study_level_id: {
        type: Sequelize.STRING
      },
      study_program_id: {
        type: Sequelize.STRING
      },
      study_field_id: {
        type: Sequelize.STRING
      },
      age_group_id: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('DisaggregatedGraduatedStudent3A2s');
  }
};