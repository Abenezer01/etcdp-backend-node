"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("constructionrelatedservices", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "constructionrelatedservices",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      type_of_service: {
        type: Sequelize.STRING,
      },
      specification_detail: {
        type: Sequelize.STRING,
      },
      unit_of_measurement: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("constructionrelatedservices");
  },
};
