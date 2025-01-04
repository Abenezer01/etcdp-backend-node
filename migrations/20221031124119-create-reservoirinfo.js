"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reservoirinfos", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "reservoirinfos",
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
      dam_volume: {
        type: Sequelize.STRING,
      },
      total_capacity: {
        type: Sequelize.STRING,
      },
      active_capacity: {
        type: Sequelize.STRING,
      },
      inactive_capacity: {
        type: Sequelize.STRING,
      },
      catchment_area: {
        type: Sequelize.DOUBLE,
      },
      surface_area: {
        type: Sequelize.DOUBLE,
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
    await queryInterface.dropTable("reservoirinfos");
  },
};
