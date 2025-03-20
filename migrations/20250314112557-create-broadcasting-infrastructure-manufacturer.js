'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BroadcastingInfrastructureManufacturers', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'BroadcastingInfrastructureManufacturers',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      broadcasting_infrastructure_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'BroadcastingInfrastructures',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      antennas: {
        type: Sequelize.STRING
      },
      transmitters: {
        type: Sequelize.STRING
      },
      towers: {
        type: Sequelize.STRING
      },
      cables: {
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
    await queryInterface.dropTable('BroadcastingInfrastructureManufacturers');
  }
};