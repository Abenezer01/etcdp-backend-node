'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TrainingDescription105Bs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      target_trainees: {
        type: Sequelize.STRING
      },
      curriculum: {
        type: Sequelize.STRING
      },
      certification: {
        type: Sequelize.STRING
      },
      success_rate: {
        type: Sequelize.STRING
      },
      number_of_trainees: {
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
    await queryInterface.dropTable('TrainingDescription105Bs');
  }
};