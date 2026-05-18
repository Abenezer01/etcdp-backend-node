'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BridgeSuperStructures', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'BridgeSuperStructures',
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
      bridge_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'BridgeBasicData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      bridge_structure_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      span_number: {
        type: Sequelize.INTEGER
      },
      span_composition: {
        type: Sequelize.STRING
      },
      total_span_length: {
        type: Sequelize.DOUBLE
      },
      carriage_width: {
        type: Sequelize.DOUBLE
      },
      side_walk_width: {
        type: Sequelize.DOUBLE
      },
      lane_number: {
        type: Sequelize.INTEGER
      },
      span_support_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      deck_slab_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      girder_number: {
        type: Sequelize.INTEGER
      },
      girder_depth: {
        type: Sequelize.DOUBLE
      },
      girder_spacing: {
        type: Sequelize.DOUBLE
      },
      girder_width: {
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
    await queryInterface.dropTable('BridgeSuperStructures');
  }
};