'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ElectricPowerDetail65A2s', {
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
      finance_modulity: {
        type: Sequelize.STRING
      },
      total_investment: {
        type: Sequelize.DOUBLE
      },
      total_cost: {
        type: Sequelize.DOUBLE
      },
      lcoe: {
        type: Sequelize.DOUBLE
      },
      stuff_number: {
        type: Sequelize.INTEGER
      },
      work_accident_number: {
        type: Sequelize.INTEGER
      },
      safety_measures_implemented: {
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
    await queryInterface.dropTable('ElectricPowerDetail65A2s');
  }
};