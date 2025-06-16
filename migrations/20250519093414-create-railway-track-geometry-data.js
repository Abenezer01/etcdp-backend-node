'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RailwayTrackGeometryData', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'RailwayTrackGeometryData',
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
      alignment: {
        type: Sequelize.STRING
      },
      gradient: {
        type: Sequelize.DOUBLE
      },
      curvature_radius: {
        type: Sequelize.DOUBLE
      },
      cant: {
        type: Sequelize.STRING
      },
      track_gauge: {
        type: Sequelize.STRING
      },
      cross_level: {
        type: Sequelize.STRING
      },
      track_surface_profile: {
        type: Sequelize.STRING
      },
      twist: {
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
    await queryInterface.dropTable('RailwayTrackGeometryData');
  }
};