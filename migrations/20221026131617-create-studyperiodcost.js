"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("studyperiodcosts", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "studyperiodcosts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      stakeholder_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "stakeholders", //stakeholder registered as higher institute type
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      stakeholderstudyfield_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "stakeholderstudyfields",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
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
      total_month: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      study_cost: {
        type: Sequelize.DOUBLE,
        allowNull: false,
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
    await queryInterface.dropTable("studyperiodcosts");
  },
};
