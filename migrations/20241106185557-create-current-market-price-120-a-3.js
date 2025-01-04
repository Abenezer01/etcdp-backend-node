'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CurrentMarketPrice120A3s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      material_type: {
        type: Sequelize.UUID
      },
      material_category: {
        type: Sequelize.UUID
      },
      quantity_required: {
        type: Sequelize.INTEGER
      },
      measurement_unit_id: {
        type: Sequelize.UUID
      },
      cost_per_unit: {
        type: Sequelize.DOUBLE
      },
      market_location: {
        type: Sequelize.STRING
      },
      supplier_name: {
        type: Sequelize.STRING
      },
      lead_time: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('CurrentMarketPrice120A3s');
  }
};