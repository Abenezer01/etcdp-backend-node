"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("electrictowers", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "electrictowers",
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
      transmissionline_id: {
        type: Sequelize.UUID,
        references: {
          model: "transmissionlines",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      overall_length: {
        type: Sequelize.DOUBLE,
      },
      embedded_length: {
        type: Sequelize.DOUBLE,
      },
      columns: {
        type: Sequelize.STRING,
      },
      braces: {
        type: Sequelize.STRING,
      },
      beam_cross_arms: {
        type: Sequelize.STRING,
      },
      brace_cross_arm: {
        type: Sequelize.STRING,
      },
      elasticity_modulus: {
        type: Sequelize.STRING,
      },
      poission_ratio: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("electrictowers");
  },
};
