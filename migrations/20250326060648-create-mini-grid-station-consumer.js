'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MiniGridStationConsumers', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'MiniGridStationConsumers',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      mini_grid_station_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'MiniGridStations',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      residential: {
        type: Sequelize.INTEGER
      },
      commercial: {
        type: Sequelize.INTEGER
      },
      productive_industrial: {
        type: Sequelize.INTEGER
      },
      health_centers: {
        type: Sequelize.INTEGER
      },
      schools: {
        type: Sequelize.INTEGER
      },
      street_lighting: {
        type: Sequelize.INTEGER
      },
      other: {
        type: Sequelize.INTEGER
      },
      expected_electricity_sales: {
        type: Sequelize.DOUBLE
      },
      electricity_tariff: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('MiniGridStationConsumers');
  }
};