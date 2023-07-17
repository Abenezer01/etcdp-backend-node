"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("resourcequantityandprices", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "resourcequantityandprices",
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
      resourcebrand_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "resourcebrands",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      detailresourcetype_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "detailresourcetypes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      project_id: { type: Sequelize.UUID },
      unit_price: {
        type: Sequelize.DOUBLE,
      },
      quantity: {
        type: Sequelize.DOUBLE,
      },
      store_address: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATETIME,
      },
      datasource: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("resourcequantityandprices");
  },
};
