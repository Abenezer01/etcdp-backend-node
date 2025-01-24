'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MeterPerformanceMaintenance76Bs', {
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
      maintenance_frequency: {
        type: Sequelize.STRING
      },
      average_meter_lifespan: {
        type: Sequelize.INTEGER
      },
      average_meter_accuracy: {
        type: Sequelize.STRING
      },
      safety_problems_encountered: {
        type: Sequelize.STRING
      },
      number_of_work_accidents: {
        type: Sequelize.INTEGER
      },
      on_site_safety_measures: {
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
    await queryInterface.dropTable('MeterPerformanceMaintenance76Bs');
  }
};