'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SolarPowerInfrastructure67Ds', {
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
      solar_panel_manufacturer: {
        type: Sequelize.STRING
      },
      solar_panel_model: {
        type: Sequelize.STRING
      },
      solar_panel_type: {
        type: Sequelize.STRING
      },
      number_of_solar_panels: {
        type: Sequelize.INTEGER
      },
      capacity_of_each_solar_panel: {
        type: Sequelize.DOUBLE
      },
      inverter_manufacturer: {
        type: Sequelize.STRING
      },
      inverter_model: {
        type: Sequelize.STRING
      },
      number_of_inverters: {
        type: Sequelize.INTEGER
      },
      other_equipment: {
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
    await queryInterface.dropTable('SolarPowerInfrastructure67Ds');
  }
};