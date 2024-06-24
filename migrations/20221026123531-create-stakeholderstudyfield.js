"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("stakeholderstudyfields", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "stakeholderstudyfields",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      description: {
        type: Sequelize.TEXT,
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
      studyfield_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "studyfields",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      studyprogram_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "studyprograms",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      studylevel_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "studylevels",
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
  async down(queryInterface, /* Sequelize */) {
    await queryInterface.dropTable("stakeholderstudyfields");
  },
};
