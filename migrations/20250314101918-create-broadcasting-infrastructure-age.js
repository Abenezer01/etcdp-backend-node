'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BroadcastingInfrastructureAges', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'BroadcastingInfrastructureAges',
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
        type: Sequelize.INTEGER
      },
      transmitters: {
        type: Sequelize.INTEGER
      },
      towers: {
        type: Sequelize.INTEGER
      },
      cables: {
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
    await queryInterface.dropTable('BroadcastingInfrastructureAges');
  }
};