"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("graduates", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "graduates",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      higher_institute_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "stakeholders", //stakeholder registered as higher institute type
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      stake_study_field_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "stakeholderstudyfields",
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
      description: {
        type: Sequelize.TEXT,
      },
      study_program_id: {
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
      study_period_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "studyperiodcosts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      male: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      female: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      year: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      agelevel_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "agelevels",
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
    await queryInterface.dropTable("graduates");
  },
};
