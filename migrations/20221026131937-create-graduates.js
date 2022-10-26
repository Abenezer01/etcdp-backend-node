'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('graduates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_id: {
        type: Sequelize.UUID
      },
      higher_institute: {
        type: Sequelize.STRING
      },
      study_field_title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      study_program: {
        type: Sequelize.STRING
      },
      study_level: {
        type: Sequelize.STRING
      },
      study_period: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      age_id: {
        type: Sequelize.UUID
      },
      revision_no: {
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
    await queryInterface.dropTable('graduates');
  }
};