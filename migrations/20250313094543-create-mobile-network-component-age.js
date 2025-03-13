'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MobileNetworkComponentAges', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'MobileNetworkComponentAges',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      mobile_network_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'MobileNetworks',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      cell: {
        type: Sequelize.INTEGER
      },
      towers: {
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
    await queryInterface.dropTable('MobileNetworkComponentAges');
  }
};