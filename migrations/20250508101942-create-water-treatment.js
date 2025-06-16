'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WaterTreatments', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'WaterTreatments',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      general_dam_information_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'GeneralDamInformations',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      system_main_component: {
        type: Sequelize.STRING
      },
      design_period: {
        type: Sequelize.INTEGER
      },
      total_water_supply_production_capacity: {
        type: Sequelize.DOUBLE
      },
      maximum_population_at_projection_period: {
        type: Sequelize.INTEGER
      },
      per_capita_water_demand: {
        type: Sequelize.DOUBLE
      },
      maximum_pipe_size: {
        type: Sequelize.DOUBLE
      },
      minimum_pipe_size: {
        type: Sequelize.DOUBLE
      },
      total_water_supply_pipe_length: {
        type: Sequelize.DOUBLE
      },
      reservoirs_number: {
        type: Sequelize.INTEGER
      },
      total_reservoir_capacity: {
        type: Sequelize.DOUBLE
      },
      remark: {
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
    await queryInterface.dropTable('WaterTreatments');
  }
};