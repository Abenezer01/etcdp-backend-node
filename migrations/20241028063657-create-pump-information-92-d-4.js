'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PumpInformation92D4s', {
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
      borehold_id: {
        type: Sequelize.UUID
      },
      pump_type: {
        type: Sequelize.STRING
      },
      pump_position: {
        type: Sequelize.STRING
      },
      water_temperature: {
        type: Sequelize.DOUBLE
      },
      water_quality: {
        type: Sequelize.DOUBLE
      },
      water_quality_reason: {
        type: Sequelize.STRING
      },
      wellhead_availability: {
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
    await queryInterface.dropTable('PumpInformation92D4s');
  }
};