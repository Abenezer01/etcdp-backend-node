'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BallastCharacteristics95Bs', {
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
      ballast_type: {
        type: Sequelize.STRING
      },
      particle_size_distribution: {
        type: Sequelize.STRING
      },
      quantity_used: {
        type: Sequelize.DOUBLE
      },
      ballast_material_type: {
        type: Sequelize.STRING
      },
      ballast_source: {
        type: Sequelize.STRING
      },
      ballast_material_size: {
        type: Sequelize.STRING
      },
      ballast_layer_thickness: {
        type: Sequelize.DOUBLE
      },
      compaction_method: {
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
    await queryInterface.dropTable('BallastCharacteristics95Bs');
  }
};