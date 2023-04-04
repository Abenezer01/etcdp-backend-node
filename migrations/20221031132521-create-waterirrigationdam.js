"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("waterirrigationdams", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "waterirrigationdams",
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
        type: Sequelize.DOUBLE,
      },
      total_capacity: {
        type: Sequelize.DOUBLE,
      },
      active_capacity: {
        type: Sequelize.DOUBLE,
      },
      inactive_capacity: {
        type: Sequelize.DOUBLE,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("waterirrigationdams");
  },
};
