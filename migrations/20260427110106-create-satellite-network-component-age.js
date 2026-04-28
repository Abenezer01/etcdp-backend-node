'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SatelliteNetworkComponentAges', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'SatelliteNetworkComponentAges',
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
      
      satellite_network_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'SatelliteNetworks',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      cell_towers: {
        type: Sequelize.INTEGER
      },
      antennas: {
        type: Sequelize.INTEGER
      },
      base_stations: {
        type: Sequelize.INTEGER
      },
      repeaters: {
        type: Sequelize.INTEGER
      },
      switches: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('SatelliteNetworkComponentAges');
  }
};