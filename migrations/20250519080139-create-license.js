'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Licenses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "Licenses",
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
      license_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      license_category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      license_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      license_scope: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      licensing_body: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      license_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      issue_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      expire_date: {
        type: Sequelize.DATE,
        allowNull: false,
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
    await queryInterface.dropTable('Licenses');
  }
};