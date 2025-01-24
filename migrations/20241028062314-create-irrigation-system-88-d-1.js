'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IrrigationSystem88D1s', {
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
      source_of_water: {
        type: Sequelize.STRING
      },
      gross_command_area: {
        type: Sequelize.DOUBLE
      },
      net_irrigated_area: {
        type: Sequelize.DOUBLE
      },
      project_target: {
        type: Sequelize.STRING
      },
      irrigation_technology: {
        type: Sequelize.STRING
      },
      irrigation_efficiency: {
        type: Sequelize.DOUBLE
      },
      status_of_scheme: {
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
    await queryInterface.dropTable('IrrigationSystem88D1s');
  }
};