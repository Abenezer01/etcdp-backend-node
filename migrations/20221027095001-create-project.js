"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("projects", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "projects",
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
      projectcategory_id: {
        type: Sequelize.UUID,
        references: {
          model: "projectcategories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      projecttype_id: {
        type: Sequelize.UUID,
        references: {
          model: "projecttypes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      projectsubcategory_id: {
        type: Sequelize.UUID,
        references: {
          model: "projectsubcategories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      grade: {
        type: Sequelize.STRING,
      },
      end_user: {
        type: Sequelize.STRING,
      },
      function: {
        type: Sequelize.STRING,
      },
      source_of_fund_id: {
        type: Sequelize.UUID,
        references: {
          model: "ProjectMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      remark: {
        type: Sequelize.TEXT,
      },
      contract_no: {
        type: Sequelize.STRING,
      },
      budget_code: {
        type: Sequelize.STRING,
      },
      procurement_no: {
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
    await queryInterface.dropTable("projects");
  },
};
