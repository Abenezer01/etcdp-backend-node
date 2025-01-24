'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SleeperCharacteristics96Bs', {
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
      sleeper_type: {
        type: Sequelize.STRING
      },
      sleeper_length: {
        type: Sequelize.DOUBLE
      },
      sleeper_width: {
        type: Sequelize.DOUBLE
      },
      sleeper_height: {
        type: Sequelize.DOUBLE
      },
      spacing_between_sleepers: {
        type: Sequelize.DOUBLE
      },
      distance_between_pairs: {
        type: Sequelize.DOUBLE
      },
      sleeper_material_specifications: {
        type: Sequelize.STRING
      },
      sleeper_spacing_center_to_center: {
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
    await queryInterface.dropTable('SleeperCharacteristics96Bs');
  }
};