'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ConstructionBestPracticeAward123As', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      award_name: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      recipient: {
        type: Sequelize.STRING
      },
      supporting: {
        type: Sequelize.STRING
      },
      organization: {
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
    await queryInterface.dropTable('ConstructionBestPracticeAward123As');
  }
};