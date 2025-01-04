"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("projectusedresources", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "projectusedresources",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      project_id: {
        type: Sequelize.UUID,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      type: {
        type: Sequelize.STRING,
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
      resouresubcategory_id: {
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
      quantity: {
        type: Sequelize.DOUBLE,
      },
      unit_price: {
        type: Sequelize.DOUBLE,
      },
      period_from: {
        type: Sequelize.DATE,
      },
      period_until: {
        type: Sequelize.DATE,
      },
      data_source_id: {
        type: Sequelize.UUID,
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
    await queryInterface.dropTable("projectusedresources");
  },
};
