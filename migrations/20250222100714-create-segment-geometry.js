'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SegmentGeometries', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'SegmentGeometries',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      project_id: {
        type: Sequelize.UUID,
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
      carriage_way_width: {
        type: Sequelize.DOUBLE
      },
      lane_width: {
        type: Sequelize.DOUBLE
      },
      shoulder_width: {
        type: Sequelize.DOUBLE
      },
      cross_section_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      grade_percentage: {
        type: Sequelize.DOUBLE
      },
      elevation_change: {
        type: Sequelize.DOUBLE
      },
      cross_slope_percentage: {
        type: Sequelize.DOUBLE
      },
      property_access_control: {
        type: Sequelize.BOOLEAN
      },
      similar_for_all_lane: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('SegmentGeometries');
  }
};