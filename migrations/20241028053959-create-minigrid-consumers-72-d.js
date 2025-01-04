'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MinigridConsumers72Ds', {
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
      residential: {
        type: Sequelize.INTEGER
      },
      commercial: {
        type: Sequelize.INTEGER
      },
      productive_industrial: {
        type: Sequelize.INTEGER
      },
      health_centers: {
        type: Sequelize.INTEGER
      },
      schools: {
        type: Sequelize.INTEGER
      },
      street_lighting: {
        type: Sequelize.INTEGER
      },
      expected_electricity_sales: {
        type: Sequelize.INTEGER
      },
      electricity_tariff: {
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
    await queryInterface.dropTable('MinigridConsumers72Ds');
  }
};