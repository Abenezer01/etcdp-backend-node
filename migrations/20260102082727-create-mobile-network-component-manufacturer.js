'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MobileNetworkComponentManufacturers', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'MobileNetworkComponentManufacturers',
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
        type: Sequelize.STRING
      },
      towers: {
        type: Sequelize.STRING
      },
      antennas: {
        type: Sequelize.STRING
      },
      base_stations: {
        type: Sequelize.STRING
      },
      repeaters: {
        type: Sequelize.STRING
      },
      switches: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('MobileNetworkComponentManufacturers');
  }
};