'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BallastConditionAssessment95Cs', {
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
      inspection_dates: {
        type: Sequelize.DATE
      },
      ballast_condition_rating: {
        type: Sequelize.STRING
      },
      presence_of_fouling: {
        type: Sequelize.STRING
      },
      ballast_degradation_indicators: {
        type: Sequelize.STRING
      },
      ballast_quality_testing_method: {
        type: Sequelize.STRING
      },
      testing_frequency: {
        type: Sequelize.STRING
      },
      ballast_resistance: {
        type: Sequelize.DOUBLE
      },
      ballast_degradation_rate: {
        type: Sequelize.DOUBLE
      },
      drainage_performance: {
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
    await queryInterface.dropTable('BallastConditionAssessment95Cs');
  }
};