'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ManufacturedConstructionMaterialQuality122A1s', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      company_name: {
        type: Sequelize.STRING
      },
      material_type: {
        type: Sequelize.STRING
      },
      quality_parameter_id: {
        type: Sequelize.UUID
      },
      value: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('ManufacturedConstructionMaterialQuality122A1s');
  }
};