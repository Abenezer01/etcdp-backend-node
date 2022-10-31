'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_id: {
        type: Sequelize.UUID
      },
      fileable_id: {
        type: Sequelize.UUID
      },
      fileable_type: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      extension: {
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
    await queryInterface.dropTable('files');
  }
};