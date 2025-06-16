"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Resources", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "Resources",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      department_id: {
        type: Sequelize.UUID,
        references: {
          model: "departments",
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
        allowNull: false,
        references: {
          model: "resourcesubcategories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantity_measurement_unit_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "ResourceMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      quality_measurement_unit_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "ResourceMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      remark: Sequelize.TEXT,
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
    await queryInterface.dropTable("Resources");
  },
};
