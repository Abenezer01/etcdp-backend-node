'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TerminalAndFacilityData', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'TerminalAndFacilityData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      general_airport_information_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'GeneralAirportInformations',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
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
      terminal_area: {
        type: Sequelize.DOUBLE
      },
      car_parks: {
        type: Sequelize.BOOLEAN
      },
      apron_flood_lights: {
        type: Sequelize.BOOLEAN
      },
      taxi_way_lights: {
        type: Sequelize.BOOLEAN
      },
      information_signs: {
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
    await queryInterface.dropTable('TerminalAndFacilityData');
  }
};