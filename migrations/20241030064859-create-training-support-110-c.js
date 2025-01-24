'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TrainingSupport110Cs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      id: {
        type: Sequelize.STRING
      },
      organization_type: {
        type: Sequelize.STRING
      },
      support_type: {
        type: Sequelize.STRING
      },
      area_of_research: {
        type: Sequelize.STRING
      },
      support_start_date: {
        type: Sequelize.DATE
      },
      support_end_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('TrainingSupport110Cs');
  }
};