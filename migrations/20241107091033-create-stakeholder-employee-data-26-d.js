'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StakeholderEmployeeData26Ds', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      
      stakeholder_id: {
        type: Sequelize.UUID
      },
      type: {
        type: Sequelize.STRING
      },
      male: {
        type: Sequelize.INTEGER
      },
      female: {
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
    await queryInterface.dropTable('StakeholderEmployeeData26Ds');
  }
};