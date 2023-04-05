"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("certificates", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "certificates",
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
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      certificate_no: {
        type: Sequelize.STRING,
      },
      date_of_issue: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      expiry_date: {
        type: Sequelize.DATE,
      },
      initial_certificate_no: {
        type: Sequelize.STRING,
      },
      initial_certificate_issue_date: {
        type: Sequelize.DATE,
      },
      file_id: {
        type: Sequelize.UUID,
        references: {
          model: "files",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      revision_no: {
        type: Sequelize.INTEGER,
      },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("certificates");
  },
};
