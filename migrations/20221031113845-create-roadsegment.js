"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("roadsegments", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "roadsegments",
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
      surface_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "ProjectMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      start_northing: {
        type: Sequelize.DOUBLE,
      },
      start_easting: {
        type: Sequelize.DOUBLE,
      },
      end_northing: {
        type: Sequelize.DOUBLE,
      },
      end_easting: {
        type: Sequelize.DOUBLE,
      },
      design_standard_id: {
        type: Sequelize.UUID,
        references: {
          model: "ProjectMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("roadsegments");
  },
};
