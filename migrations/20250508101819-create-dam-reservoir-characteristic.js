'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DamReservoirCharacteristics', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'DamReservoirCharacteristics',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      general_dam_information_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'GeneralDamInformations',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      full_reservoir_volume: {
        type: Sequelize.DOUBLE
      },
      dead_storage_volume: {
        type: Sequelize.DOUBLE
      },
      live_storage_volume: {
        type: Sequelize.DOUBLE
      },
      reservoir_area: {
        type: Sequelize.DOUBLE
      },
      fetch_length: {
        type: Sequelize.DOUBLE
      },
      inflow_design_flood: {
        type: Sequelize.DOUBLE
      },
      dam_instrumentation_availability: {
        type: Sequelize.BOOLEAN
      },
      embedded_instrument_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
    await queryInterface.dropTable('DamReservoirCharacteristics');
  }
};