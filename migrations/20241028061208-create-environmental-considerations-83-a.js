'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EnvironmentalConsiderations83As', {
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
      energy_efficiency: {
        type: Sequelize.STRING
      },
      water_management: {
        type: Sequelize.STRING
      },
      emissions_reduction: {
        type: Sequelize.STRING
      },
      noise_reduction: {
        type: Sequelize.STRING
      },
      vegetation_and_landscaping: {
        type: Sequelize.STRING
      },
      waste_management: {
        type: Sequelize.STRING
      },
      number_of_households_displaced: {
        type: Sequelize.INTEGER
      },
      amount_of_compensations_paid: {
        type: Sequelize.DOUBLE
      },
      environmental_permissions_obtained: {
        type: Sequelize.BOOLEAN
      },
      mitigation_measures_for_environmental_impact: {
        type: Sequelize.STRING
      },
      soil_erosion_control_measures_implemented: {
        type: Sequelize.STRING
      },
      vegetation_management: {
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
    await queryInterface.dropTable('EnvironmentalConsiderations83As');
  }
};