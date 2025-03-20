'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DataCenterFacilityCapacities', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'DataCenterFacilityCapacities',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      data_center_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'DataCenters',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      total_floor_area: {
        type: Sequelize.STRING
      },
      power_capacity: {
        type: Sequelize.STRING
      },
      rack_space_capacity: {
        type: Sequelize.STRING
      },
      cooling_capacity: {
        type: Sequelize.STRING
      },
      access_control: {
        type: Sequelize.BOOLEAN
      },
      surveillance_cameras: {
        type: Sequelize.BOOLEAN
      },
      fire_suppression_systems: {
        type: Sequelize.BOOLEAN
      },
      intrusion_detection_systems: {
        type: Sequelize.BOOLEAN
      },
      others: {
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
    await queryInterface.dropTable('DataCenterFacilityCapacities');
  }
};