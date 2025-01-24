'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GuaranteeDetails114CDEs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      
      project_detail_id: {
        type: Sequelize.UUID
      },
      type: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      contact_person: {
        type: Sequelize.STRING
      },
      contact_number: {
        type: Sequelize.STRING
      },
      guarantee_amount: {
        type: Sequelize.DOUBLE
      },
      guarantee_validity_period: {
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
    await queryInterface.dropTable('GuaranteeDetails114CDEs');
  }
};