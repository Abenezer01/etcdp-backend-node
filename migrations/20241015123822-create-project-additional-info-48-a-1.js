'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectAdditionalInfos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "ProjectAdditionalInfos",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      project_status: {
        type: Sequelize.STRING
      },
      reason: {
        type: Sequelize.STRING
      },
      work_accident_number: {
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
    await queryInterface.dropTable('ProjectAdditionalInfos');
  }
};