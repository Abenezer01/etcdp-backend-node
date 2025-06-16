'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DamMonitoringAndInstrumentations', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'DamMonitoringAndInstrumentations',
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
      is_monitoring_instruments_calibrated: {
        type: Sequelize.BOOLEAN
      },
      gallery_availability: {
        type: Sequelize.BOOLEAN
      },
      meteorological_data_collection_instruments_availability: {
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
    await queryInterface.dropTable('DamMonitoringAndInstrumentations');
  }
};