'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HydropowerScheme91Ds', {
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
      
      type_of_development: {
        type: Sequelize.STRING
      },
      dam_name: {
        type: Sequelize.STRING
      },
      classification_of_development: {
        type: Sequelize.STRING
      },
      plant_operation: {
        type: Sequelize.STRING
      },
      number_of_turbines: {
        type: Sequelize.INTEGER
      },
      turbine_capacity: {
        type: Sequelize.DOUBLE
      },
      max_head: {
        type: Sequelize.DOUBLE
      },
      installed_capacity: {
        type: Sequelize.DOUBLE
      },
      overall_plant_efficiency: {
        type: Sequelize.DOUBLE
      },
      plant_factor: {
        type: Sequelize.DOUBLE
      },
      availability_factor: {
        type: Sequelize.DOUBLE
      },
      annual_power_production: {
        type: Sequelize.DOUBLE
      },
      powerhouse_location: {
        type: Sequelize.STRING
      },
      availability_of_tunnel: {
        type: Sequelize.BOOLEAN
      },
      tunnel_length: {
        type: Sequelize.DOUBLE
      },
      tunnel_shape: {
        type: Sequelize.STRING
      },
      main_transmission_line_capacity: {
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
    await queryInterface.dropTable('HydropowerScheme91Ds');
  }
};