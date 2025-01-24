'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Project44A1s', {
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
        type: Sequelize.STRING
      },
      projecttype_id: {
        type: Sequelize.STRING
      },
      projectcategory_id: {
        type: Sequelize.STRING
      },
      projectsubcategory_id: {
        type: Sequelize.STRING
      },
      project_name: {
        type: Sequelize.STRING
      },
      remark: {
        type: Sequelize.TEXT
      },
      contract_number: {
        type: Sequelize.STRING
      },
      budget_code: {
        type: Sequelize.STRING
      },
      precurment_number: {
        type: Sequelize.STRING
      },
      budget_source: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Project44A1s');
  }
};