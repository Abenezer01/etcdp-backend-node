'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('regulations', {
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
      description: {
        type: Sequelize.TEXT
      },
      prepared_by: {
        type: Sequelize.STRING
      },
      effective_date_from: {
        type: Sequelize.DATE
      },
      effective_upto: {
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
    await queryInterface.dropTable('regulations');
  }
};