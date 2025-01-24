'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GeothermalWellData68Cs', {
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
      well_name: {
        type: Sequelize.STRING
      },
      depth: {
        type: Sequelize.DOUBLE
      },
      well_diameter: {
        type: Sequelize.DOUBLE
      },
      drilling_period: {
        type: Sequelize.STRING
      },
      temperature_at_bottom_hole: {
        type: Sequelize.DOUBLE
      },
      number_of_wells: {
        type: Sequelize.INTEGER
      },
      plant_life: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('GeothermalWellData68Cs');
  }
};