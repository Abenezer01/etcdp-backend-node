'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EndorsementSupports110Ds', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      id: {
        type: Sequelize.STRING
      },
      funding_sources: {
        type: Sequelize.STRING
      },
      professional_associations: {
        type: Sequelize.STRING
      },
      collaborations: {
        type: Sequelize.STRING
      },
      government_support: {
        type: Sequelize.STRING
      },
      industry_partnerships: {
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
    await queryInterface.dropTable('EndorsementSupports110Ds');
  }
};