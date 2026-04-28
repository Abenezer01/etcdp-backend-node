'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SatelliteNetworkCapacities', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      parent_id: {
        type: Sequelize.UUID,
        reference: {
          model: 'SatelliteNetworkCapacities',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        reference: {
          model: 'projects',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      satellite_network_id: {
        type: Sequelize.UUID,
        allowNull: false,
        reference: {
          model: 'SatelliteNetworks',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      network_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        reference: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      total_bandwidth: {
        type: Sequelize.DOUBLE
      },
      users_number: {
        type: Sequelize.INTEGER
      },
      remark: {
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
    await queryInterface.dropTable('SatelliteNetworkCapacities');
  }
};