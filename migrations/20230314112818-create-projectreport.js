'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projectreports', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'projectreports',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      projectplan_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'projectplans',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      type: {
        type: Sequelize.STRING
      },
      project_expense: {
        type: Sequelize.DOUBLE
      },
      manpower: {
        type: Sequelize.DOUBLE
      },
      direct_labour: {
        type: Sequelize.DOUBLE
      },
      indirect_labour: {
        type: Sequelize.DOUBLE
      },
      material: {
        type: Sequelize.DOUBLE
      },
      machinery: {
        type: Sequelize.DOUBLE
      },
      other_expense: {
        type: Sequelize.DOUBLE
      },
      sub_contractor_cost: {
        type: Sequelize.DOUBLE
      },
      financial_performance: {
        type: Sequelize.DOUBLE
      },
      physical_performance: {
        type: Sequelize.DOUBLE
      },
      cost_due_to_rework: {
        type: Sequelize.DOUBLE
      },
      over_head_cost: {
        type: Sequelize.DOUBLE
      },
      year: {
        type: Sequelize.STRING
      },
      month: {
        type: Sequelize.STRING
      },
      is_summary: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      start: {
        type: Sequelize.DATE
      },
      end: {
        type: Sequelize.DATE
      },
      revised: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
    await queryInterface.dropTable('projectreports');
  }
};