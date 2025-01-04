'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TeachingStaffByEducationLevel6B2s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      department: {
        type: Sequelize.STRING
      },
      study_program: {
        type: Sequelize.STRING
      },
      study_level_id: {
        type: Sequelize.UUID
      },
      male: {
        type: Sequelize.DOUBLE
      },
      female: {
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
    await queryInterface.dropTable('TeachingStaffByEducationLevel6B2s');
  }
};