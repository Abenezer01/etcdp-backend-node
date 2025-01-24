'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NetworkCoverageAndPerformance60Es', {
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
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      total_coverage_area: {
        type: Sequelize.DOUBLE
      },
      population_coverage: {
        type: Sequelize.DOUBLE
      },
      number_of_active_users: {
        type: Sequelize.INTEGER
      },
      average_download_speed: {
        type: Sequelize.DOUBLE
      },
      average_upload_speed: {
        type: Sequelize.DOUBLE
      },
      signal_strength: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('NetworkCoverageAndPerformance60Es');
  }
};