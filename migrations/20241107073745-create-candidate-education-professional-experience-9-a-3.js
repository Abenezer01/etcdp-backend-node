'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CandidateEducationProfessionalExperience9A3s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      candidate_personal_information_id: {
        type: Sequelize.UUID
      },
      total_years_professional_experience: {
        type: Sequelize.UUID
      },
      previous_employment: {
        type: Sequelize.STRING
      },
      employee_organization_name: {
        type: Sequelize.STRING
      },
      responsibilities_held: {
        type: Sequelize.STRING
      },
      job_titles: {
        type: Sequelize.STRING
      },
      years_of_employment: {
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
    await queryInterface.dropTable('CandidateEducationProfessionalExperience9A3s');
  }
};