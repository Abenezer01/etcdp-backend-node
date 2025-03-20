'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DataCenterComponentManufacturers', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'DataCenterComponentManufacturers',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      data_center_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'DataCenters',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      servers: {
        type: Sequelize.STRING
      },
      storage_devices: {
        type: Sequelize.STRING
      },
      networking_equipment: {
        type: Sequelize.STRING
      },
      cooling_systems: {
        type: Sequelize.STRING
      },
      backup_generators: {
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
    await queryInterface.dropTable('DataCenterComponentManufacturers');
  }
};