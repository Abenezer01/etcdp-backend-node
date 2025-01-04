'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EnvironmentalImpactAssessment132Bs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eia_project_evaluation_id: {
        type: Sequelize.UUID
      },
      eia_conducted: {
        type: Sequelize.BOOLEAN
      },
      level_of_eia: {
        type: Sequelize.STRING
      },
      date_of_eia_completion: {
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
    await queryInterface.dropTable('EnvironmentalImpactAssessment132Bs');
  }
};