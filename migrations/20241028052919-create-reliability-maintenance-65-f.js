'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReliabilityMaintenance65Fs', {
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
      maintenance_frequency: {
        type: Sequelize.STRING
      },
      total_outage_duration_per_year: {
        type: Sequelize.DOUBLE
      },
      total_intrruptions_number_per_year: {
        type: Sequelize.DOUBLE
      },
      saidi: {
        type: Sequelize.DOUBLE
      },
      saifi: {
        type: Sequelize.DOUBLE
      },
      automatic_fault_detection: {
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
    await queryInterface.dropTable('ReliabilityMaintenance65Fs');
  }
};