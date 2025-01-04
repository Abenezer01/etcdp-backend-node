"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("turbineinfos", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "turbineinfos",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      turbine_type: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      detail: {
        type: Sequelize.TEXT,
      },
      generating_capacity: {
        type: Sequelize.STRING,
      },
      designed_quantity: {
        type: Sequelize.STRING,
      },
      installed_quantity: {
        type: Sequelize.STRING,
      },
      functional_quantity: {
        type: Sequelize.STRING,
      },
      revision_no: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("turbineinfos");
  },
};
