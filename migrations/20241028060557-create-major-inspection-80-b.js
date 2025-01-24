'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MajorInspection80Bs', {
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
      
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      bridge_part_defect: {
        type: Sequelize.STRING
      },
      damage_type: {
        type: Sequelize.STRING
      },
      damage_quantity: {
        type: Sequelize.INTEGER
      },
      hydrology_defect: {
        type: Sequelize.STRING
      },
      maintenance_action_recommendation: {
        type: Sequelize.STRING
      },
      bridge_history: {
        type: Sequelize.STRING
      },
      inspector_remark: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('MajorInspection80Bs');
  }
};