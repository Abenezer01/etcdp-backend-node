'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trainings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_id: {
        type: Sequelize.UUID
      },
      title: {
        type: Sequelize.STRING
      },
      training: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      provider: {
        type: Sequelize.STRING
      },
      provision_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('trainings');
  }
};