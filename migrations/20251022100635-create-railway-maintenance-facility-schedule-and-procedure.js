'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RailwayMaintenanceFacilityScheduleAndProcedures', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
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
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'RailwayMaintenanceFacilityScheduleAndProcedures',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      facility_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      maintenance_schedules_and_routines_availability: {
        type: Sequelize.BOOLEAN
      },
      procedures_for_planned_and_preventive_maintenance_availability: {
        type: Sequelize.BOOLEAN
      },
      documentation_and_record_keeping_practices_availability: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('RailwayMaintenanceFacilityScheduleAndProcedures');
  }
};