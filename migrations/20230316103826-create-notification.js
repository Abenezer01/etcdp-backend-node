"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("notifications", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subject: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      notifiable_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      notifiable_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      data: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      read_at: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("notifications");
  },
};
