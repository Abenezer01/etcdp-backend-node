'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ElectricSmartMetersRatingsData', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'ElectricSmartMetersRatingsData',
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
      active_reactive: {
        type: Sequelize.ENUM('Active', 'Reactive', 'Both'),
        allowNull: false,
        defaultValue: 'Active'
      },
      kwh_kvarh_rating: {
        type: Sequelize.DOUBLE
      },
      phase: {
        type: Sequelize.ENUM('Three Phase', 'Single Phase'),
        allowNull: false,
        defaultValue: 'Three Phase'
      },
      maximum_current_rating: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('ElectricSmartMetersRatingsData');
  }
};