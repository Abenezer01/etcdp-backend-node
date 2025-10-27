'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RailwayMaintenanceWorkforceAndFacilityStaffs', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'RailwayMaintenanceWorkforceAndFacilityStaffs',
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
      facility_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      maintenance_personnel_number: {
        type: Sequelize.INTEGER
      },
      staff_facilities: {
        type: Sequelize.BOOLEAN
      },
      training_facilities_and_resources: {
        type: Sequelize.BOOLEAN
      },
      trainers_instructors_number: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('RailwayMaintenanceWorkforceAndFacilityStaffs');
  }
};