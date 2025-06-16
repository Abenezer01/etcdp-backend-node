"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Certificates", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "Certificates",
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
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      scope: {
        type: Sequelize.STRING,
        allowNull: false
      },
      certifying_body: {
        type: Sequelize.STRING,
        allowNull: false
      },
      certification_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      issue_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      expire_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      remark: Sequelize.TEXT,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, /* Sequelize */) {
    await queryInterface.dropTable("Certificates");
  },
};
