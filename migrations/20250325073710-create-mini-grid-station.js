'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MiniGridStations', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'MiniGridStations',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      substation_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'SubstationTransformerAndSwitchGearData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      minigrid_size: {
        type: Sequelize.DOUBLE
      },
      battery_type_id: {
        type: Sequelize.UUID
      },
      battery_size: {
        type: Sequelize.DOUBLE
      },
      inverter: {
        type: Sequelize.DOUBLE
      },
      system_voltage: {
        type: Sequelize.DOUBLE
      },
      expected_annual_generation: {
        type: Sequelize.DOUBLE
      },
      diesel_generator: {
        type: Sequelize.ENUM('Equipped', 'Not Equipped'),
        allowNull: false,
        defaultValue: 'Not Equipped'
      },
      owner_operator: {
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
    await queryInterface.dropTable('MiniGridStations');
  }
};