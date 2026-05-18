'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JointVentureCompanies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "JointVentureCompanies",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      stakeholder_id: {
        type: Sequelize.UUID,
        references: {
          model: "stakeholders",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      joint_venture_id: {
        type: Sequelize.UUID,
        references: {
          model: "JointVentures",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      title: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      specialization: {
        type: Sequelize.STRING
      },
      roles_and_responsibilities: {
        type: Sequelize.TEXT
      },
      ownership_percentage: {
        type: Sequelize.DOUBLE
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      reference: {
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
    await queryInterface.dropTable('JointVentureCompanies');
  }
};