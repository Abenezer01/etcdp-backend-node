'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RailwaySystemConditionAssessments', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'RailwaySystemConditionAssessments',
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
      system_condition_rating_or_assessment: {
        type: Sequelize.STRING
      },
      defect_presence: {
        type: Sequelize.BOOLEAN
      },
      system_performance_indicators: {
        type: Sequelize.STRING
      },
      power_supply_systems_and_communication: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('RailwaySystemConditionAssessments');
  }
};