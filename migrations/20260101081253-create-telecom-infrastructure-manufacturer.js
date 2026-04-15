'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TelecomInfrastructureManufacturers', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'TelecomInfrastructureManufacturers',
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
        type: Sequelize.STRING
      },
      wires: {
        type: Sequelize.STRING
      },
      routers: {
        type: Sequelize.STRING
      },
      switches: {
        type: Sequelize.STRING
      },
      hubs: {
        type: Sequelize.STRING
      },
      repeaters: {
        type: Sequelize.STRING
      },
      antennas: {
        type: Sequelize.STRING
      },
      towers: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('TelecomInfrastructureManufacturers');
  }
};