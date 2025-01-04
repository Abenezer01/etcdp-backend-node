'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BridgeBasicData80A1s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "Project44A1s",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id: {
        type: Sequelize.UUID
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Project44A1s",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      bridge_length: {
        type: Sequelize.DOUBLE
      },
      bridge_width: {
        type: Sequelize.DOUBLE
      },
      river_width: {
        type: Sequelize.DOUBLE
      },
      present_water_level: {
        type: Sequelize.DOUBLE
      },
      highest_water_level: {
        type: Sequelize.DOUBLE
      },
      area_topography: {
        type: Sequelize.STRING
      },
      year_of_construction: {
        type: Sequelize.INTEGER
      },
      cost_of_bridge: {
        type: Sequelize.DOUBLE
      },
      load_capacity: {
        type: Sequelize.DOUBLE
      },
      average_daily_traffic: {
        type: Sequelize.DOUBLE
      },
      detour_possibility: {
        type: Sequelize.INTEGER
      },
      road_alignment: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('BridgeBasicData80A1s');
  }
};