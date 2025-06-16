'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ElectricSmartMetersPerformanceData', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'ElectricSmartMetersPerformanceData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      electric_smart_meters_data_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ElectricSmartMetersData',
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
      average_meter_lifespan: {
        type: Sequelize.INTEGER
      },
      average_meter_accuracy: {
        type: Sequelize.DOUBLE
      },
      safety_problems_encountered: {
        type: Sequelize.STRING
      },
      work_accidents_number: {
        type: Sequelize.INTEGER
      },
      on_site_safety_regulation_implemented: {
        type: Sequelize.BOOLEAN
      },
      other: {
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
    await queryInterface.dropTable('ElectricSmartMetersPerformanceData');
  }
};