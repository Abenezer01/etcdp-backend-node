'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TrafficVolumes', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'TrafficVolumes',
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
      road_segment_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'roadsegments',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      count_location_coordinate_x: {
        type: Sequelize.DOUBLE
      },
      count_location_coordinate_y: {
        type: Sequelize.DOUBLE
      },
      count_time: {
        type: Sequelize.DATE
      },
      count_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      lane_number: {
        type: Sequelize.INTEGER
      },
      vehicle_number_per_hour: {
        type: Sequelize.INTEGER
      },
      average_daily_traffic_volume: {
        type: Sequelize.INTEGER
      },
      corridor_importance_level: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('TrafficVolumes');
  }
};