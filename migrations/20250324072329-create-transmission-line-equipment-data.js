'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransmissionLineEquipmentData', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'TransmissionLineEquipmentData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      transmission_line_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'TransmissionLineInformations',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      insulator_type: {
        type: Sequelize.STRING
      },
      ground_wire_type: {
        type: Sequelize.STRING
      },
      fiber_optics_number: {
        type: Sequelize.INTEGER
      },
      opgw_uts: {
        type: Sequelize.DOUBLE
      },
      opgw_weight: {
        type: Sequelize.DOUBLE
      },
      owner_operator: {
        type: Sequelize.STRING
      },
      tower_grounding: {
        type: Sequelize.STRING
      },
      tower_circuit_arrangement: {
        type: Sequelize.STRING
      },
      other_equipment: {
        type: Sequelize.STRING
      },
      remark: {
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
    await queryInterface.dropTable('TransmissionLineEquipmentData');
  }
};