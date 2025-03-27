'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MiniGridStationDistributionLineInfrastructures', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'MiniGridStationDistributionLineInfrastructures',
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
      distribution_line_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      distribution_line_material_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      distribution_line_conductor_size: {
        type: Sequelize.DOUBLE
      },
      voltage_level: {
        type: Sequelize.DOUBLE
      },
      topology: {
        type: Sequelize.ENUM('Radial', 'Ring'),
        allowNull: false,
        defaultValue: 'Radial'
      },
      switching_station_connection: {
        type: Sequelize.BOOLEAN
      },
      station_name: {
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
    await queryInterface.dropTable('MiniGridStationDistributionLineInfrastructures');
  }
};