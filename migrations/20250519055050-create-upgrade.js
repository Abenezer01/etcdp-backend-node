'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Upgrades', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "Upgrades",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      stakeholder_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "stakeholders",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      upgrade_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      previous_level: {
        type: Sequelize.STRING
      },
      upgraded_level: {
        type: Sequelize.STRING
      },
      ownership_percentage: {
        type: Sequelize.DOUBLE
      },
      description: {
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
    await queryInterface.dropTable('Upgrades');
  }
};