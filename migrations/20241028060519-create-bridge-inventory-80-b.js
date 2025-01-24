'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BridgeInventory80Bs', {
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
      type_of_slab: {
        type: Sequelize.STRING
      },
      river_width: {
        type: Sequelize.STRING
      },
      deck_type: {
        type: Sequelize.STRING
      },
      highest_water_level: {
        type: Sequelize.STRING
      },
      type_of_pier: {
        type: Sequelize.STRING
      },
      type_of_foundation: {
        type: Sequelize.STRING
      },
      type_of_railing: {
        type: Sequelize.STRING
      },
      type_of_bearing: {
        type: Sequelize.STRING
      },
      type_of_abutment: {
        type: Sequelize.STRING
      },
      type_of_expansion_joint: {
        type: Sequelize.STRING
      },
      type_of_surface_span_support: {
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
    await queryInterface.dropTable('BridgeInventory80Bs');
  }
};