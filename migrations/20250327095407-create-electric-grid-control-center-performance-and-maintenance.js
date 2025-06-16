'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ElectricGridControlCenterPerformanceAndMaintenances', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'ElectricGridControlCenterPerformanceAndMaintenances',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      electric_grid_control_center_data_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ElectricGridControlCenterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      maintenance_frequency_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      total_system_downtime_outage_duration: {
        type: Sequelize.DOUBLE
      },
      total_interruptions_number: {
        type: Sequelize.INTEGER
      },
      saidi: {
        type: Sequelize.STRING
      },
      saifi: {
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
    await queryInterface.dropTable('ElectricGridControlCenterPerformanceAndMaintenances');
  }
};