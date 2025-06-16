'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RailwayFasteningSystemConditionAssessments', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'RailwayFasteningSystemCharacteristics',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      railway_line_section_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      inspection_date: {
        type: Sequelize.DATE
      },
      fastening_system_condition_rating: {
        type: Sequelize.STRING
      },
      defect_presence: {
        type: Sequelize.STRING
      },
      fastening_system_stability_and_alignment: {
        type: Sequelize.STRING
      },
      rail_fastening_model_number: {
        type: Sequelize.STRING
      },
      rail_fastening_needed_quantity: {
        type: Sequelize.INTEGER
      },
      rail_fastening_expected_lifespan: {
        type: Sequelize.INTEGER
      },
      rail_fastening_availability: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('RailwayFasteningSystemConditionAssessments');
  }
};