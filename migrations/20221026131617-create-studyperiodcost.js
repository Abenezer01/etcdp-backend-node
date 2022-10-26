'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studyperiodcosts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'studyperiodcosts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      higher_institute: {
        type: Sequelize.STRING
      },
      study_field_title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      study_program: {
        type: Sequelize.STRING
      },
      study_level: {
        type: Sequelize.STRING
      },
      study_period: {
        type: Sequelize.STRING
      },
      study_cost: {
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
    await queryInterface.dropTable('studyperiodcosts');
  }
};