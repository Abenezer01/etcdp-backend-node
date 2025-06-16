'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RunwayAndApproachData', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'RunwayAndApproachData',
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
      runway_longitudinal_gradients: {
        type: Sequelize.DOUBLE
      },
      runway_transverse_gradients: {
        type: Sequelize.DOUBLE
      },
      approach_to_the_runway: {
        type: Sequelize.DOUBLE
      },
      approach_and_runway_clear_zone: {
        type: Sequelize.DOUBLE
      },
      apron_surface_type_id: {
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
    await queryInterface.dropTable('RunwayAndApproachData');
  }
};