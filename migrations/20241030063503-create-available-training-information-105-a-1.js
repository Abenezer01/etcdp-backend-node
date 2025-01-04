'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AvailableTrainingInformation105A1s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      training_type: {
        type: Sequelize.STRING
      },
      training_provider: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      training_fees: {
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
    await queryInterface.dropTable('AvailableTrainingInformation105A1s');
  }
};