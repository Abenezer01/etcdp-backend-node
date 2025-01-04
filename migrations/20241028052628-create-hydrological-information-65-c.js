'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HydrologicalInformation65Cs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "Project44A1s",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id: {
        type: Sequelize.UUID
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Project44A1s",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      water_source: {
        type: Sequelize.STRING
      },
      catchment_area: {
        type: Sequelize.DOUBLE
      },
      elevation_change: {
        type: Sequelize.DOUBLE
      },
      head: {
        type: Sequelize.DOUBLE
      },
      total_inflow: {
        type: Sequelize.DOUBLE
      },
      active_storage_volume: {
        type: Sequelize.DOUBLE
      },
      water_stored: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('HydrologicalInformation65Cs');
  }
};