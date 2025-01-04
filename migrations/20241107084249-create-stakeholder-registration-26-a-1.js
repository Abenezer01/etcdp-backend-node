'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StakeholderRegistration26A1s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stakeholdertype_id: {
        type: Sequelize.STRING
      },
      stakeholdercategory_id: {
        type: Sequelize.STRING
      },
      stakeholdersubcategory_id: {
        type: Sequelize.STRING
      },
      serial_number: {
        type: Sequelize.STRING
      },
      company_type: {
        type: Sequelize.STRING
      },
      trade_name: {
        type: Sequelize.STRING
      },
      tin_number: {
        type: Sequelize.STRING
      },
      ownershiptype_id: {
        type: Sequelize.STRING
      },
      businessfield_id: {
        type: Sequelize.STRING
      },
      origin: {
        type: Sequelize.STRING
      },
      operation_location: {
        type: Sequelize.STRING
      },
      members_no: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('StakeholderRegistration26A1s');
  }
};