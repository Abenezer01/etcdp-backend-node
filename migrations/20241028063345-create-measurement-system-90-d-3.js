'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MeasurementSystem90D3s', {
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
      
      flow_measurement_available: {
        type: Sequelize.BOOLEAN
      },
      level_measurement_available: {
        type: Sequelize.BOOLEAN
      },
      gas_pressure_measurement_available: {
        type: Sequelize.BOOLEAN
      },
      sludge_measurement_available: {
        type: Sequelize.BOOLEAN
      },
      water_quality_measurement_available: {
        type: Sequelize.BOOLEAN
      },
      effluent_quality_measures: {
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
    await queryInterface.dropTable('MeasurementSystem90D3s');
  }
};