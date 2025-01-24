'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Professionals12A3s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      organization_id: {
        type: Sequelize.STRING
      },
      training_id: {
        type: Sequelize.STRING
      },
      age_group_id: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      proficiency_level: {
        type: Sequelize.STRING
      },
      nationality: {
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
    await queryInterface.dropTable('Professionals12A3s');
  }
};