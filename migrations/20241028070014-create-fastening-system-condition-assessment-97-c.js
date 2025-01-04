'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FasteningSystemConditionAssessment97Cs', {
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
      condition_rating: {
        type: Sequelize.STRING
      },
      presence_of_defects: {
        type: Sequelize.TEXT
      },
      system_stability_alignment: {
        type: Sequelize.STRING
      },
      rail_fastening_model_number: {
        type: Sequelize.STRING
      },
      quantity_needed: {
        type: Sequelize.INTEGER
      },
      expected_lifespan: {
        type: Sequelize.INTEGER
      },
      cost_of_fastening: {
        type: Sequelize.DOUBLE
      },
      availability_of_fastening: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('FasteningSystemConditionAssessment97Cs');
  }
};