'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CulvertRoadOverInformations', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'CulvertRoadOverInformations',
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
      culvert_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'CulvertBasicData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      carriage_way_width: {
        type: Sequelize.DOUBLE
      },
      side_walk_width: {
        type: Sequelize.DOUBLE
      },
      lane_number: {
        type: Sequelize.INTEGER
      },
      head_wall_to_head_wall: {
        type: Sequelize.DOUBLE
      },
      average_fill_height: {
        type: Sequelize.DOUBLE
      },
      guard_rail_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
    await queryInterface.dropTable('CulvertRoadOverInformations');
  }
};