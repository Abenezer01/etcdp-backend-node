'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoadCharacteristics78Ds', {
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
      project_id: {
        type: Sequelize.STRING
      },
      number_of_lanes: {
        type: Sequelize.INTEGER
      },
      surface_condition: {
        type: Sequelize.STRING
      },
      speed_limit: {
        type: Sequelize.INTEGER
      },
      road_width: {
        type: Sequelize.DOUBLE
      },
      road_markings: {
        type: Sequelize.STRING
      },
      shoulder_width: {
        type: Sequelize.DOUBLE
      },
      median_type: {
        type: Sequelize.STRING
      },
      intersection_type: {
        type: Sequelize.STRING
      },
      road_lighting: {
        type: Sequelize.BOOLEAN
      },
      pedestrian_facilities: {
        type: Sequelize.STRING
      },
      bicycle_facilities: {
        type: Sequelize.STRING
      },
      average_daily_traffic: {
        type: Sequelize.INTEGER
      },
      road_ownership: {
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
    await queryInterface.dropTable('RoadCharacteristics78Ds');
  }
};