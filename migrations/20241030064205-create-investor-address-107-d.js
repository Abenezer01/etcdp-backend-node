'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InvestorAddress107Ds', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      investor_id: {
        type: Sequelize.UUID
      },
      region: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      sub_city: {
        type: Sequelize.STRING
      },
      woreda: {
        type: Sequelize.STRING
      },
      kebele: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      contact_person: {
        type: Sequelize.STRING
      },
      organization: {
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
    await queryInterface.dropTable('InvestorAddress107Ds');
  }
};