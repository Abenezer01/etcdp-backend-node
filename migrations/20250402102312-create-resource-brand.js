"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ResourceBrands", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "ResourceBrands",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      resource_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Resources",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      manufacturer: {
        type: Sequelize.STRING
      },
      remark: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("resourcebrands");
  },
};
