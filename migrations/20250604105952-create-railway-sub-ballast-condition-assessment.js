'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RailwaySubBallastConditionAssessments', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'RailwaySubBallastConditionAssessments',
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
      sub_ballast_material_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      inspection_dates: {
        type: Sequelize.DATE
      },
      sub_ballast_condition_rating: {
        type: Sequelize.STRING
      },
      cracking_observations: {
        type: Sequelize.STRING
      },
      erosion_issues: {
        type: Sequelize.STRING
      },
      unwanted_vegetation_presence: {
        type: Sequelize.STRING
      },
      testing_frequency_per_year: {
        type: Sequelize.INTEGER
      },
      sub_ballast_resistance: {
        type: Sequelize.STRING
      },
      sub_ballast_degradation_rate: {
        type: Sequelize.STRING
      },
      drainage_performance: {
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
    await queryInterface.dropTable('RailwaySubBallastConditionAssessments');
  }
};