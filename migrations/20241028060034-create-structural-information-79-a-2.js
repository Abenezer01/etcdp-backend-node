'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StructuralInformation79A2s', {
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
      culvert_type: {
        type: Sequelize.STRING
      },
      culvert_barrel_length: {
        type: Sequelize.DOUBLE
      },
      culvert_height: {
        type: Sequelize.DOUBLE
      },
      no_of_openings_barrel: {
        type: Sequelize.INTEGER
      },
      opening_width_composition: {
        type: Sequelize.DOUBLE
      },
      total_culvert_width_diameter: {
        type: Sequelize.DOUBLE
      },
      distance_between_barrels: {
        type: Sequelize.DOUBLE
      },
      head_wall_length: {
        type: Sequelize.DOUBLE
      },
      pier_type: {
        type: Sequelize.STRING
      },
      pier_height: {
        type: Sequelize.DOUBLE
      },
      abutment_type: {
        type: Sequelize.STRING
      },
      abutment_average_height: {
        type: Sequelize.DOUBLE
      },
      end_wall_type_inlet: {
        type: Sequelize.STRING
      },
      end_wall_type_outlet: {
        type: Sequelize.STRING
      },
      wing_wall_average_length: {
        type: Sequelize.DOUBLE
      },
      paved_water_way_type: {
        type: Sequelize.STRING
      },
      soil_type: {
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
    await queryInterface.dropTable('StructuralInformation79A2s');
  }
};