'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BridgeInventory80A3s', {
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
      id: {
        type: Sequelize.UUID
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
      bridge_structure_type: {
        type: Sequelize.STRING
      },
      slab_type: {
        type: Sequelize.STRING
      },
      deck_type: {
        type: Sequelize.STRING
      },
      pier_type: {
        type: Sequelize.STRING
      },
      foundation_type: {
        type: Sequelize.STRING
      },
      railing_type: {
        type: Sequelize.STRING
      },
      bearing_type: {
        type: Sequelize.STRING
      },
      abutment_type: {
        type: Sequelize.STRING
      },
      expansion_joint_type: {
        type: Sequelize.STRING
      },
      surface_type: {
        type: Sequelize.STRING
      },
      span_support_type: {
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
    await queryInterface.dropTable('BridgeInventory80A3s');
  }
};