'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RailwayBallastConditionAssessments', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'RailwayBallastConditionAssessments',
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
      inspection_dates: {
        type: Sequelize.DATE
      },
      ballast_condition_rating: {
        type: Sequelize.ENUM('Excellent', 'Good', 'Fair', 'Poor'),
        allowNull: false,
        defaultValue: 'Excellent',
      },
      fouling_presence: {
        type: Sequelize.ENUM('Fines', 'Debris', 'Sediments', 'Siltation', 'Other'),
        allowNull: false,
        defaultValue: 'Fines',
      },
      ballast_degradation_indicators: {
        type: Sequelize.ENUM('Breakage', 'Crack', 'Other'),
        allowNull: false,
        defaultValue: 'Breakage',
      },
      ballast_quality_testing_method: {
        type: Sequelize.ENUM('Gradation Test', 'Soundness Test', 'Compaction Test', 'Other'),
        allowNull: false, 
        defaultValue: 'Gradation Test',
      },
      testing_frequency: {
        type: Sequelize.INTEGER
      },
      ballast_resistance: {
        type: Sequelize.STRING
      },
      ballast_degradation_rate: {
        type: Sequelize.ENUM('Excellent', 'Good', 'Fair', 'Poor'),
        allowNull: false,
        defaultValue: 'Excellent',
      },
      drainage_performance: {
        type: Sequelize.ENUM('Excellent', 'Good', 'Fair', 'Poor'),
        allowNull: false,
        defaultValue: 'Excellent',
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
    await queryInterface.dropTable('RailwayBallastConditionAssessments');
  }
};