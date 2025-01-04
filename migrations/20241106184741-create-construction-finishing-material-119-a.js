'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ConstructionFinishingMaterial119As', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      project_id: {
        type: Sequelize.UUID
      },
      finishing_type: {
        type: Sequelize.STRING
      },
      construction_type: {
        type: Sequelize.STRING
      },
      quantity_required: {
        type: Sequelize.INTEGER
      },
      measurement_unit_id: {
        type: Sequelize.UUID
      },
      quality_standard: {
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
    await queryInterface.dropTable('ConstructionFinishingMaterial119As');
  }
};