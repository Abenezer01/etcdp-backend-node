"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("projecttimes", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "projecttimes",
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
      contract_signing_date: {
        type: Sequelize.DATE,
      },
      site_handover_date: {
        type: Sequelize.DATE,
      },
      mobilization_days_no: {
        type: Sequelize.INTEGER,
      },
      commencement_date: {
        type: Sequelize.DATE,
      },
      original_contract_duration: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("projecttimes");
  },
};
