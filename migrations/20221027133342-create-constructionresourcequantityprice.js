"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("constructionresourcequantityprices", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "constructionresourcequantityprices",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      resourcetype_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "resourcetypes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      resourcecategory_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "resourcecategories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      resourcesubcategory_id: {
        type: Sequelize.UUID,
        references: {
          model: "resourcesubcategories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      item_specification: {
        type: Sequelize.STRING,
      },
      measurement_unit: {
        type: Sequelize.STRING,
      },
      stock_quantity: {
        type: Sequelize.INTEGER,
      },
      unit_price: {
        type: Sequelize.DOUBLE,
      },
      data_source_id: {
        type: Sequelize.UUID,
      },
      data_source_description: {
        type: Sequelize.TEXT,
      },
      source_address: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("constructionresourcequantityprices");
  },
};
