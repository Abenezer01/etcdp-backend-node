'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MinigridDistribution72Cs', {
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
      type_of_system: {
        type: Sequelize.STRING
      },
      type_of_lines: {
        type: Sequelize.STRING
      },
      line_length: {
        type: Sequelize.DOUBLE
      },
      poles: {
        type: Sequelize.STRING
      },
      type_of_transformer: {
        type: Sequelize.STRING
      },
      number_of_transformers: {
        type: Sequelize.INTEGER
      },
      size_of_transformers: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('MinigridDistribution72Cs');
  }
};