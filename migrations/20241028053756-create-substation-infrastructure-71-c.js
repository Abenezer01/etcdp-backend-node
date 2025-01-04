'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SubstationInfrastructure71Cs', {
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
      number_of_transformers: {
        type: Sequelize.INTEGER
      },
      input_voltage_level: {
        type: Sequelize.DOUBLE
      },
      transformer_type: {
        type: Sequelize.STRING
      },
      output_voltage_level: {
        type: Sequelize.DOUBLE
      },
      transformer_capacity: {
        type: Sequelize.DOUBLE
      },
      switchgear_type: {
        type: Sequelize.STRING
      },
      other_equipment: {
        type: Sequelize.STRING
      },
      circuit_breaker_type: {
        type: Sequelize.STRING
      },
      substation_layout_arrangement: {
        type: Sequelize.STRING
      },
      is_equipped_with_standby_diesel_generator: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('SubstationInfrastructure71Cs');
  }
};