'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WaterLevelInformation92D3s', {
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
      id: {
        type: Sequelize.UUID
      },
      borehold_id: {
        type: Sequelize.UUID
      },
      static_water_level: {
        type: Sequelize.DOUBLE
      },
      dynamic_water_level: {
        type: Sequelize.DOUBLE
      },
      maximum_drawdown_depth: {
        type: Sequelize.DOUBLE
      },
      safe_yield: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('WaterLevelInformation92D3s');
  }
};