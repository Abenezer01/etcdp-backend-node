'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TeachingStaffByProfessionalRank6B3s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      department: {
        type: Sequelize.STRING
      },
      study_program: {
        type: Sequelize.STRING
      },
      professional_rank_id: {
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
    await queryInterface.dropTable('TeachingStaffByProfessionalRank6B3s');
  }
};