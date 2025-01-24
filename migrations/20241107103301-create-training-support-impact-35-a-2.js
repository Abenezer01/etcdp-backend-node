'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TrainingSupportImpact35A2s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      id: {
        type: Sequelize.STRING
      },
      training_and_support_id: {
        type: Sequelize.STRING
      },
      improve_business: {
        type: Sequelize.BOOLEAN
      },
      increase_revenue: {
        type: Sequelize.BOOLEAN
      },
      create_new_job: {
        type: Sequelize.BOOLEAN
      },
      additional_comment: {
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
    await queryInterface.dropTable('TrainingSupportImpact35A2s');
  }
};