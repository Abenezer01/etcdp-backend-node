'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WasteWater90D1s', {
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
      id: {
        type: Sequelize.UUID
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
      conveyance_system: {
        type: Sequelize.STRING
      },
      total_sewer_length: {
        type: Sequelize.DOUBLE
      },
      max_sewer_size: {
        type: Sequelize.DOUBLE
      },
      min_sewer_size: {
        type: Sequelize.DOUBLE
      },
      max_sewer_flowrate: {
        type: Sequelize.DOUBLE
      },
      wastewater_treatment_type: {
        type: Sequelize.STRING
      },
      design_period: {
        type: Sequelize.INTEGER
      },
      max_population_projection: {
        type: Sequelize.INTEGER
      },
      wastewater_treatment_capacity: {
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
    await queryInterface.dropTable('WasteWater90D1s');
  }
};