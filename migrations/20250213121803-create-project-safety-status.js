'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectSafetyStatuses', {
      id: { 
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'ProjectSafetyStatuses',
          key: 'id'
        }
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        }
      },
      no_of_fatal_injuries: {
        type: Sequelize.INTEGER
      },
      no_of_major_injuries: {
        type: Sequelize.INTEGER
      },
      no_of_minor_injuries: {
        type: Sequelize.INTEGER
      },
      measures_taken: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      lesson_learned: {
        type: Sequelize.TEXT,
        allowNull: false
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
    await queryInterface.dropTable('ProjectSafetyStatuses');
  }
};