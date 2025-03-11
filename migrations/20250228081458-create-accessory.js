'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accessories', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'Accessories',
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
      under_passes: {
        type: Sequelize.INTEGER
      },
      ramps: {
        type: Sequelize.INTEGER
      },
      traffic_signals: {
        type: Sequelize.INTEGER
      },
      repair_stations: {
        type: Sequelize.INTEGER
      },
      bicycle_lanes: {
        type: Sequelize.BOOLEAN
      },
      bicycle_signals: {
        type: Sequelize.INTEGER
      },
      culvert: {
        type: Sequelize.BOOLEAN
      },
      bridge: {
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
    await queryInterface.dropTable('Accessories');
  }
};