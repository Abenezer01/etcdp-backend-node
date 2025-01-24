'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MaterialProductionCapacity29Bs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      
      stakeholder_id: {
        type: Sequelize.UUID
      },
      item: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      annual_quantity: {
        type: Sequelize.DOUBLE
      },
      average_unit_price: {
        type: Sequelize.DOUBLE
      },
      total_annual_amount: {
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
    await queryInterface.dropTable('MaterialProductionCapacity29Bs');
  }
};