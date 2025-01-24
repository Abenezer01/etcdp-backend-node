'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FacilityCapacityAndSecurityMeasures64Fs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "projects",
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
      total_floor_area: {
        type: Sequelize.DOUBLE
      },
      power_capacity: {
        type: Sequelize.DOUBLE
      },
      rack_space_capacity: {
        type: Sequelize.INTEGER
      },
      access_control: {
        type: Sequelize.BOOLEAN
      },
      surveillance_cameras: {
        type: Sequelize.BOOLEAN
      },
      fire_suppression: {
        type: Sequelize.BOOLEAN
      },
      intrusion_detection_systems: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('FacilityCapacityAndSecurityMeasures64Fs');
  }
};