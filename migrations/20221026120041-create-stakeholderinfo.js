'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stakeholderinfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_id: {
        type: Sequelize.UUID
      },
      stakeholder_id: {
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      license_issued_date: {
        type: Sequelize.DATE
      },
      capital: {
        type: Sequelize.STRING
      },
      general_manager: {
        type: Sequelize.STRING
      },
      description: {
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
    await queryInterface.dropTable('stakeholderinfos');
  }
};