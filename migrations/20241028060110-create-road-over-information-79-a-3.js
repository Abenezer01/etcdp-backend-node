'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoadOverInformation79A3s', {
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
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Project44A1s",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      carriage_way_width: {
        type: Sequelize.DOUBLE
      },
      side_walk_width: {
        type: Sequelize.DOUBLE
      },
      no_of_lane: {
        type: Sequelize.INTEGER
      },
      head_wall_to_head_wall: {
        type: Sequelize.DOUBLE
      },
      average_fill_height: {
        type: Sequelize.DOUBLE
      },
      guard_rail_parapet_material_type: {
        type: Sequelize.STRING
      },
      parapet_length: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('RoadOverInformation79A3s');
  }
};