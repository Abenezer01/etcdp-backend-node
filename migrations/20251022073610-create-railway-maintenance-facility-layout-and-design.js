'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RailwayMaintenanceFacilityLayoutAndDesigns', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4V4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'RailwayMaintenanceFacilityLayoutAndDesigns',
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
      facility_layout_and_dimension: {
        type: Sequelize.TEXT
      },
      maintenance_bays_number_and_size: {
        type: Sequelize.STRING
      },
      spare_parts_and_equipment_storage_areas: {
        type: Sequelize.STRING
      },
      office_and_administrative_areas_availability: {
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
    await queryInterface.dropTable('RailwayMaintenanceFacilityLayoutAndDesigns');
  }
};