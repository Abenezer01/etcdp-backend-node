'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BroadcastingNetworkCoverages', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'BroadcastingNetworkCoverages',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },  
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      broadcasting_network_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'BroadcastingNetworks',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      network_infrastructure_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      total_coverage_area: {
        type: Sequelize.DOUBLE
      },
      coverage_population_no: {
        type: Sequelize.INTEGER
      },
      active_users_no: {
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
    await queryInterface.dropTable('BroadcastingNetworkCoverages');
  }
};