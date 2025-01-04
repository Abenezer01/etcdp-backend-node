'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Certificate47A31s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      stakeholder_id: {
        type: Sequelize.UUID
      },
      certificate_type: {
        type: Sequelize.STRING
      },
      scope: {
        type: Sequelize.STRING
      },
      certifying_body: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      certificate_number: {
        type: Sequelize.STRING
      },
      issued_date: {
        type: Sequelize.DATE
      },
      expire_date: {
        type: Sequelize.DATE
      },
      remark: {
        type: Sequelize.TEXT
      },
      reference_files: {
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
    await queryInterface.dropTable('Certificate47A31s');
  }
};