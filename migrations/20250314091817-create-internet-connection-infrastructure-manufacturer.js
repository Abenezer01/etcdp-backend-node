'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InternetConnectionInfrastructureManufacturers', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'InternetConnectionInfrastructureManufacturers',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      internet_connection_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'InternetConnections',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      routers: {
        type: Sequelize.STRING
      },
      switches: {
        type: Sequelize.STRING
      },
      modems: {
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
    await queryInterface.dropTable('InternetConnectionInfrastructureManufacturers');
  }
};