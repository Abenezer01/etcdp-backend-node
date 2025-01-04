'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RiverTrainingTechnicalInformation93Ds', {
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
      peak_flow_of_river: {
        type: Sequelize.DOUBLE
      },
      flood_inundation_area: {
        type: Sequelize.DOUBLE
      },
      types_of_river_training_work: {
        type: Sequelize.STRING
      },
      category_of_training_works: {
        type: Sequelize.STRING
      },
      total_length_of_training_works: {
        type: Sequelize.DOUBLE
      },
      original_river_bank_level: {
        type: Sequelize.DOUBLE
      },
      bank_level_after_protection_work: {
        type: Sequelize.DOUBLE
      },
      material_for_embankment: {
        type: Sequelize.STRING
      },
      status_of_scheme: {
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
    await queryInterface.dropTable('RiverTrainingTechnicalInformation93Ds');
  }
};