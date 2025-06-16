'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IrrigationAndDrainageData', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'IrrigationAndDrainageData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      general_dam_information_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'GeneralDamInformations',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      water_source_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      gross_command_area: {
        type: Sequelize.DOUBLE
      },
      net_irrigated_area: {
        type: Sequelize.DOUBLE
      },
      project_target_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      headwork_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      irrigation_technology_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      overall_irrigation_efficiency: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('IrrigationAndDrainageData');
  }
};