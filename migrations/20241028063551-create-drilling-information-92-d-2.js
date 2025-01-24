'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DrillingInformation92D2s', {
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
      
      borehold_id: {
        type: Sequelize.UUID
      },
      drilled_depth: {
        type: Sequelize.DOUBLE
      },
      normal_drilling_diameter: {
        type: Sequelize.DOUBLE
      },
      telescopic_upper_drilling_depth: {
        type: Sequelize.DOUBLE
      },
      lower_drilling_diameter: {
        type: Sequelize.DOUBLE
      },
      casing_material: {
        type: Sequelize.STRING
      },
      normal_casing_diameter: {
        type: Sequelize.DOUBLE
      },
      telescopic_casing_diameter: {
        type: Sequelize.DOUBLE
      },
      casing_depth: {
        type: Sequelize.DOUBLE
      },
      total_screen_length: {
        type: Sequelize.DOUBLE
      },
      length_of_blind_casing: {
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
    await queryInterface.dropTable('DrillingInformation92D2s');
  }
};