'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WaterSupply89D1s', {
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
      dam_name: {
        type: Sequelize.STRING
      },
      design_period: {
        type: Sequelize.INTEGER
      },
      total_water_supply_capacity: {
        type: Sequelize.DOUBLE
      },
      max_population_projection: {
        type: Sequelize.INTEGER
      },
      per_capita_water_demand: {
        type: Sequelize.DOUBLE
      },
      max_pipe_size: {
        type: Sequelize.DOUBLE
      },
      min_pipe_size: {
        type: Sequelize.DOUBLE
      },
      total_pipe_length: {
        type: Sequelize.DOUBLE
      },
      num_reservoirs: {
        type: Sequelize.INTEGER
      },
      total_reservoir_capacity: {
        type: Sequelize.DOUBLE
      },
      treatment_plant_available: {
        type: Sequelize.BOOLEAN
      },
      water_treatment_plant_capacity: {
        type: Sequelize.DOUBLE
      },
      water_supply_operation_system: {
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
    await queryInterface.dropTable('WaterSupply89D1s');
  }
};