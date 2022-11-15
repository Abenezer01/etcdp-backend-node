'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('electrictowers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'electrictowers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
      transmissionline_id: {
        type: Sequelize.UUID,
        references: {
          model: 'transmissionlines',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      overall_length: {
        type: Sequelize.DOUBLE
      },
      embedded_length: {
        type: Sequelize.DOUBLE
      },
      columns: {
        type: Sequelize.INTEGER
      },
      braces: {
        type: Sequelize.INTEGER
      },
      beam_cross_arms: {
        type: Sequelize.INTEGER
      },
      brace_cross_arm: {
        type: Sequelize.INTEGER
      },
      elasticity_modulus: {
        type: Sequelize.INTEGER
      },
      poission_ratio: {
        type: Sequelize.DOUBLE
      },
      revision_no: {
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
    await queryInterface.dropTable('electrictowers');
  }
};