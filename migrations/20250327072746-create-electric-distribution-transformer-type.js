'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ElectricDistributionTransformerTypes', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'ElectricDistributionTransformerTypes',
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
      cooling_type: {
        type: Sequelize.ENUM('Oil Immersed', 'Dry type'),
        allowNull: false,
        defaultValue: 'Oil Immersed'
      },
      transformer_power_rating: {
        type: Sequelize.DOUBLE
      },
      lifetime: {
        type: Sequelize.INTEGER
      },
      protection_installed_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      safety_problems_encountered_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      work_accidents_number: {
        type: Sequelize.INTEGER
      },
      on_site_safety_regulation_implemented: {
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
    await queryInterface.dropTable('ElectricDistributionTransformerTypes');
  }
};