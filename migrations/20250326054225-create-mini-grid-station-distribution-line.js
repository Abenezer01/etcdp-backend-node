'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MiniGridStationDistributionLines', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'MiniGridStationDistributionLines',
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
      system_type: {
        type: Sequelize.STRING
      },
      lines_type: {
        type: Sequelize.STRING
      },
      line_length: {
        type: Sequelize.DOUBLE
      },
      poles: {
        type: Sequelize.ENUM('Concrete', 'Wood', "Steel"),
        allowNull: false,
        defaultValue: 'Concrete'
      },
      transformer_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      transformers_number: {
        type: Sequelize.INTEGER
      },
      transformers_size: {
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
    await queryInterface.dropTable('MiniGridStationDistributionLines');
  }
};