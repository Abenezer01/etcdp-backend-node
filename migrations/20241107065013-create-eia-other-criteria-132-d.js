'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EIAOtherCriteria132Ds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eia_project_evaluation_id: {
        type: Sequelize.UUID
      },
      comprehensive_data_collection: {
        type: Sequelize.BOOLEAN
      },
      comparison_and_analysis: {
        type: Sequelize.TEXT
      },
      improved_transparency: {
        type: Sequelize.BOOLEAN
      },
      support_for_policy_development: {
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
    await queryInterface.dropTable('EIAOtherCriteria132Ds');
  }
};