'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HydrologicalInformations', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'HydrologicalInformations',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
      remark: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('HydrologicalInformations');
  }
};