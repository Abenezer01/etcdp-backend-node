"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("resourcestudylevels", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "resourcestudylevels",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      description: {
        type: Sequelize.TEXT,
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
      resource_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "resources",
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
    await queryInterface.dropTable("resourcestudylevels");
  },
};
