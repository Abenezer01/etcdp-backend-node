'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransmissionLineInfrastructure70Cs', {
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
      conductor_type: {
        type: Sequelize.STRING
      },
      conductor_size: {
        type: Sequelize.DOUBLE
      },
      tower_foundation_type: {
        type: Sequelize.STRING
      },
      number_of_conductors_per_phase: {
        type: Sequelize.STRING
      },
      insulator_type: {
        type: Sequelize.STRING
      },
      tower_type: {
        type: Sequelize.STRING
      },
      other_equipment: {
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
    await queryInterface.dropTable('TransmissionLineInfrastructure70Cs');
  }
};