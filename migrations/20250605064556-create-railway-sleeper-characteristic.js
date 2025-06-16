'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RailwaySleeperCharacteristics', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'RailwaySleeperCharacteristics',
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
      railway_line_section_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sleeper_type: {
        type: Sequelize.STRING
      },
      sleeper_size_and_dimensions: {
        type: Sequelize.DOUBLE
      },
      sleepers_distance_between_pairs: {
        type: Sequelize.STRING
      },
      sleeper_material_specification: {
        type: Sequelize.STRING
      },
      sleeper_spacing: {
        type: Sequelize.STRING
      },
      spacing_between: {
        type: Sequelize.DOUBLE
      },
      sleeper_shape: {
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
    await queryInterface.dropTable('RailwaySleeperCharacteristics');
  }
};