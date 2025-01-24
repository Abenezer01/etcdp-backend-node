'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EIAChecklist132Cs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      eia_project_evaluation_id: {
        type: Sequelize.UUID
      },
      air_quality: {
        type: Sequelize.BOOLEAN
      },
      water_quality_resources: {
        type: Sequelize.BOOLEAN
      },
      soil_land_use: {
        type: Sequelize.BOOLEAN
      },
      noise_vibration: {
        type: Sequelize.BOOLEAN
      },
      flora_fauna: {
        type: Sequelize.BOOLEAN
      },
      cultural_heritage: {
        type: Sequelize.BOOLEAN
      },
      socioeconomic_impacts: {
        type: Sequelize.BOOLEAN
      },
      waste_management: {
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
    await queryInterface.dropTable('EIAChecklist132Cs');
  }
};