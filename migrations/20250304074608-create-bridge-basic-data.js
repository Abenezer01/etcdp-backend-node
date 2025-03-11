'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BridgeBasicData', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'BridgeBasicData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bridge_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bridge_number: {
        type: Sequelize.STRING
      },
      bridge_length: {
        type: Sequelize.DOUBLE
      },
      bridge_width: {
        type: Sequelize.DOUBLE
      },
      construction_year: {
        type: Sequelize.INTEGER
      },
      contractor: {
        type: Sequelize.STRING
      },
      designer: {
        type: Sequelize.STRING
      },
      bridge_cost: {
        type: Sequelize.DOUBLE
      },
      land_capacity: {
        type: Sequelize.DOUBLE
      },
      average_daily_traffic: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('BridgeBasicData');
  }
};