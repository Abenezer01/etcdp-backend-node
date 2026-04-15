'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NetworkCoverages', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'NetworkCoverages',
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
      telecom_infrastructure_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'TelecomInfrastructures',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      network_infrastructure_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      total_coverage_area: {
        type: Sequelize.DOUBLE
      },
      coverage_population_number: {
        type: Sequelize.INTEGER
      },
      active_users_number: {
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
      others: {
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
    await queryInterface.dropTable('NetworkCoverages');
  }
};