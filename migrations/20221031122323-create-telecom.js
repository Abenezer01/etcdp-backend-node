"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("telecoms", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "telecoms",
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
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      specifications: {
        type: Sequelize.TEXT,
      },
      coverage_area: {
        type: Sequelize.DOUBLE,
      },
      no_of_families_coverage: {
        type: Sequelize.DOUBLE,
      },
      service_period: {
        type: Sequelize.DATE,
      },
      inauguration_date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("telecoms");
  },
};
