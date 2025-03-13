'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TelecomInfrastructureComponents', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'TelecomInfrastructureComponents',
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
      mobile_network_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      cables: {
        type: Sequelize.INTEGER
      },
      wires: {
        type: Sequelize.INTEGER
      },
      routers: {
        type: Sequelize.INTEGER
      },
      switches: {
        type: Sequelize.INTEGER
      },
      hubs: {
        type: Sequelize.INTEGER
      },
      repeaters: {
        type: Sequelize.INTEGER
      },
      antennas: {
        type: Sequelize.INTEGER
      },
      towers: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('TelecomInfrastructureComponents');
  }
};