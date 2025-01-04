'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CreditFacilityDetail112A3s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      applicationform_id: {
        type: Sequelize.STRING
      },
      desired_credit_amount: {
        type: Sequelize.DOUBLE
      },
      proposed_lease_term: {
        type: Sequelize.INTEGER
      },
      purpose_of_credit: {
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
    await queryInterface.dropTable('CreditFacilityDetail112A3s');
  }
};