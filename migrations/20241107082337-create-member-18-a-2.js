'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Member18A2s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      professional_association_id: {
        type: Sequelize.UUID
      },
      age_group_id: {
        type: Sequelize.UUID
      },
      education_level_id: {
        type: Sequelize.UUID
      },
      gender: {
        type: Sequelize.STRING
      },
      proficiency_level: {
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
    await queryInterface.dropTable('Member18A2s');
  }
};