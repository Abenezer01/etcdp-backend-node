"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("stakeholders", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "stakeholders",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      stakeholdertype_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "stakeholdertypes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      stakeholdercategory_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "stakecategories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      stakeholdersubcategory_id: {
        type: Sequelize.UUID,
        references: { 
          model: "stakesubcategories",
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
      trade_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ownership_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "ownerships",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      businessfield_id: {
        type: Sequelize.UUID,
        references: {
          model: "businessfields",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      license_issued_date: {
        type: Sequelize.DATE,
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable("stakeholders");
  },
};
