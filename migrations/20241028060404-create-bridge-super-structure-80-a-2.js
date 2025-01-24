'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BridgeSuperStructure80A2s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      bridge_structure_type: {
        type: Sequelize.STRING
      },
      no_of_span: {
        type: Sequelize.INTEGER
      },
      span_composition: {
        type: Sequelize.STRING
      },
      total_span_length: {
        type: Sequelize.DOUBLE
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
      span_support_type: {
        type: Sequelize.STRING
      },
      deck_slab_type: {
        type: Sequelize.STRING
      },
      slab_thickness: {
        type: Sequelize.DOUBLE
      },
      no_of_girder_box: {
        type: Sequelize.INTEGER
      },
      depth_of_girder_box: {
        type: Sequelize.DOUBLE
      },
      spacing_of_girder: {
        type: Sequelize.DOUBLE
      },
      width_of_girder_box: {
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
    await queryInterface.dropTable('BridgeSuperStructure80A2s');
  }
};