'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CandidateEducationBackground9A2s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      candidate_personal_information_id: {
        type: Sequelize.UUID
      },
      level_of_study: {
        type: Sequelize.STRING
      },
      field_of_study: {
        type: Sequelize.STRING
      },
      institution_attended: {
        type: Sequelize.STRING
      },
      duration_of_study: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('CandidateEducationBackground9A2s');
  }
};