'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BridgeGeotechnicalInformation81Ds', {
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
      soil_rock_type: {
        type: Sequelize.STRING
      },
      seismic_design_criteria: {
        type: Sequelize.STRING
      },
      retaining_walls: {
        type: Sequelize.BOOLEAN
      },
      geological_hazards: {
        type: Sequelize.STRING
      },
      geotechnical_reports: {
        type: Sequelize.TEXT
      },
      groundwater_conditions: {
        type: Sequelize.STRING
      },
      soil_bearing_capacity: {
        type: Sequelize.DOUBLE
      },
      slope_stability_assessment: {
        type: Sequelize.STRING
      },
      foundation_design: {
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
    await queryInterface.dropTable('BridgeGeotechnicalInformation81Ds');
  }
};