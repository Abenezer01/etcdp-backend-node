"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("replies", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      actionstate_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "actionstates",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      creator_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      is_authorized: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
  async down(queryInterface, /* Sequelize */) {
    await queryInterface.dropTable("replies");
  },
};
