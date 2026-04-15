'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TelecomInfrastructureAges', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'TelecomInfrastructureAges',
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
      cables: {
        type: Sequelize.BOOLEAN
      },
      wires: {
        type: Sequelize.BOOLEAN
      },
      routers: {
        type: Sequelize.BOOLEAN
      },
      switches: {
        type: Sequelize.BOOLEAN
      },
      hubs: {
        type: Sequelize.BOOLEAN
      },
      repeaters: {
        type: Sequelize.BOOLEAN
      },
      antennas: {
        type: Sequelize.BOOLEAN
      },
      towers: {
        type: Sequelize.BOOLEAN
      },
      remark: {
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
    await queryInterface.dropTable('TelecomInfrastructureAges');
  }
};