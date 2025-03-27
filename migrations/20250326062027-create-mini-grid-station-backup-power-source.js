'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MiniGridStationBackupPowerSources', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'MiniGridStationBackupPowerSources',
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
      capacity: {
        type: Sequelize.DOUBLE
      },
      installation_year: {
        type: Sequelize.INTEGER
      },
      distribution_lines_total_length: {
        type: Sequelize.DOUBLE
      },
      lifetime: {
        type: Sequelize.INTEGER
      },
      commissioning_date: {
        type: Sequelize.DATE
      },
      other: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('MiniGridStationBackupPowerSources');
  }
};