'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AirPortInformation104D1s', {
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
      type: {
        type: Sequelize.STRING
      },
      average_flights_per_day: {
        type: Sequelize.INTEGER
      },
      average_passengers_per_day: {
        type: Sequelize.INTEGER
      },
      cargo_capacity: {
        type: Sequelize.DOUBLE
      },
      terminal_area: {
        type: Sequelize.DOUBLE
      },
      vip_terminal: {
        type: Sequelize.BOOLEAN
      },
      guard_house: {
        type: Sequelize.BOOLEAN
      },
      visitors_sheds: {
        type: Sequelize.BOOLEAN
      },
      apron_floodlights: {
        type: Sequelize.BOOLEAN
      },
      taxiway_lights: {
        type: Sequelize.BOOLEAN
      },
      information_signs: {
        type: Sequelize.BOOLEAN
      },
      car_parks: {
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
    await queryInterface.dropTable('AirPortInformation104D1s');
  }
};