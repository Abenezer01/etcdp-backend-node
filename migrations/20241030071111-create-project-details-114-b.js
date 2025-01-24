'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectDetails114Bs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      
      project_name: {
        type: Sequelize.STRING
      },
      project_owner: {
        type: Sequelize.STRING
      },
      contract_value: {
        type: Sequelize.DOUBLE
      },
      project_duration_start: {
        type: Sequelize.DATE
      },
      project_duration_end: {
        type: Sequelize.DATE
      },
      guarantee_required: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('ProjectDetails114Bs');
  }
};