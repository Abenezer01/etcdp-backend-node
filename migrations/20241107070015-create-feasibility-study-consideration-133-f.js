'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FeasibilityStudyConsideration133Fs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      project_id: {
        type: Sequelize.UUID
      },
      sustainability_considerations: {
        type: Sequelize.TEXT
      },
      regulations_and_permits: {
        type: Sequelize.TEXT
      },
      project_team: {
        type: Sequelize.TEXT
      },
      exit_strategy: {
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
    await queryInterface.dropTable('FeasibilityStudyConsideration133Fs');
  }
};