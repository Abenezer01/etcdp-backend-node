'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TrafficAndLoad81Es', {
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
      aadt: {
        type: Sequelize.DOUBLE
      },
      design_load_capacity: {
        type: Sequelize.DOUBLE
      },
      truck_traffic_percentage: {
        type: Sequelize.DOUBLE
      },
      overweight_oversize_permits: {
        type: Sequelize.BOOLEAN
      },
      traffic_surveillance_systems: {
        type: Sequelize.STRING
      },
      traffic_flow_patterns: {
        type: Sequelize.STRING
      },
      historical_traffic_data: {
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
    await queryInterface.dropTable('TrafficAndLoad81Es');
  }
};