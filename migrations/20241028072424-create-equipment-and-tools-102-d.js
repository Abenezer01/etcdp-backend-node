'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EquipmentAndTools102Ds', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "Project44A1s",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id: {
        type: Sequelize.UUID
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Project44A1s",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      types_of_maintenance_equipment_and_tools_available: {
        type: Sequelize.STRING
      },
      hoists_cranes_and_lifting_equipment: {
        type: Sequelize.STRING
      },
      diagnostic_and_testing_equipment: {
        type: Sequelize.STRING
      },
      tools_and_machinery_specific_to_maintenance_activities: {
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
    await queryInterface.dropTable('EquipmentAndTools102Ds');
  }
};