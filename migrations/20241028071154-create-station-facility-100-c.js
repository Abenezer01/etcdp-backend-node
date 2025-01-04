'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StationFacility100Cs', {
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
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Project44A1s",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      waiting_area: {
        type: Sequelize.STRING
      },
      seating_capacity: {
        type: Sequelize.INTEGER
      },
      ticketing_facility: {
        type: Sequelize.INTEGER
      },
      restrooms: {
        type: Sequelize.INTEGER
      },
      accessibility_features: {
        type: Sequelize.STRING
      },
      passenger_information_system: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('StationFacility100Cs');
  }
};