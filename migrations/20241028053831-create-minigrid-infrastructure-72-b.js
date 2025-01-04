'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MinigridInfrastructure72Bs', {
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
      type_of_system: {
        type: Sequelize.STRING
      },
      inverter: {
        type: Sequelize.STRING
      },
      minigrid_size: {
        type: Sequelize.DOUBLE
      },
      system_voltage: {
        type: Sequelize.DOUBLE
      },
      battery_type: {
        type: Sequelize.STRING
      },
      expected_annual_generation: {
        type: Sequelize.DOUBLE
      },
      battery_size: {
        type: Sequelize.DOUBLE
      },
      is_equipped_with_standby_diesel_generator: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('MinigridInfrastructure72Bs');
  }
};