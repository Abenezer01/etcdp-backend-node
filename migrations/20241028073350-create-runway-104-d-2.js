'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Runway104D2s', {
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
      port_id: {
        type: Sequelize.UUID
      },
      length: {
        type: Sequelize.STRING
      },
      surface_type: {
        type: Sequelize.STRING
      },
      longitudinal_gradients: {
        type: Sequelize.NUMERIC
      },
      transverse_gradients: {
        type: Sequelize.NUMERIC
      },
      approach_degree: {
        type: Sequelize.STRING
      },
      clear_zone: {
        type: Sequelize.STRING
      },
      apron_surface_type: {
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
    await queryInterface.dropTable('Runway104D2s');
  }
};