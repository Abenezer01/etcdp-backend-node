"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transformers", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "transformers",
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
      transformertype_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "transformertypes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      specifications: {
        type: Sequelize.TEXT,
      },
      input_current: {
        type: Sequelize.STRING,
      },
      input_voltage: {
        type: Sequelize.STRING,
      },
      output_current: {
        type: Sequelize.STRING,
      },
      output_voltage: {
        type: Sequelize.STRING,
      },
      northing: {
        type: Sequelize.DOUBLE,
      },
      easting: {
        type: Sequelize.DOUBLE,
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
    await queryInterface.dropTable("transformers");
  },
};
