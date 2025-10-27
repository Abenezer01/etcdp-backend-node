'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RailwayPowerSupplyMaintenanceAndTestings', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'RailwayPowerSupplyMaintenanceAndTestings',
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
      railway_station_platform_layout_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'RailwayStationPlatformLayouts',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      maintenance_schedules_and_activities: {
        type: Sequelize.BOOLEAN
      },
      testing_and_commissioning_procedures: {
        type: Sequelize.BOOLEAN
      },
      recent_maintenance_records_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('RailwayPowerSupplyMaintenanceAndTestings');
  }
};