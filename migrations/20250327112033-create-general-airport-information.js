'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GeneralAirportInformations', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'GeneralAirportInformations',
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
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      airport_type: {
        type: Sequelize.ENUM('International', 'Domestic', 'Both'),
        allowNull: false,
        defaultValue: 'International'
      },
      average_flights_number: {
        type: Sequelize.INTEGER
      },
      average_passengers_number: {
        type: Sequelize.INTEGER
      },
      cargo_capacity: {
        type: Sequelize.DOUBLE
      },
      runway_length: {
        type: Sequelize.DOUBLE
      },
      runway_surface_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
    await queryInterface.dropTable('GeneralAirportInformations');
  }
};