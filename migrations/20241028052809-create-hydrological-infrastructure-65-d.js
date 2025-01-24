'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HydrologicalInfrastructure65Ds', {
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
      dam_type: {
        type: Sequelize.STRING
      },
      dam_height: {
        type: Sequelize.DOUBLE
      },
      spillway_type: {
        type: Sequelize.STRING
      },
      penstock_length: {
        type: Sequelize.DOUBLE
      },
      turbine_type: {
        type: Sequelize.STRING
      },
      turbines_number: {
        type: Sequelize.INTEGER
      },
      generators_type: {
        type: Sequelize.STRING
      },
      generators_number: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('HydrologicalInfrastructure65Ds');
  }
};