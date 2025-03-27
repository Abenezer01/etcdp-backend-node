'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransmissionLineConductorAndTowerData', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'TransmissionLineConductorAndTowerData',
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
      conductor_type: {
        type: Sequelize.STRING
      },
      conductor_code_name_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      strands_number: {
        type: Sequelize.INTEGER
      },
      conductor_size: {
        type: Sequelize.DOUBLE
      },
      conductors_per_phase_number: {
        type: Sequelize.INTEGER
      },
      tower_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      tower_height: {
        type: Sequelize.DOUBLE
      },
      conductor_diameter: {
        type: Sequelize.DOUBLE
      },
      each_strand_diameter: {
        type: Sequelize.DOUBLE
      },
      tower_foundation_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
    await queryInterface.dropTable('TransmissionLineConductorAndTowerData');
  }
};