'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stakeholders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_id: {
        type: Sequelize.UUID
      },
      type_id: {
        type: Sequelize.UUID
      },
      category_id: {
        type: Sequelize.UUID
      },
      subcategory_id: {
        type: Sequelize.UUID
      },
      trade_name: {
        type: Sequelize.STRING
      },
      tin: {
        type: Sequelize.STRING
      },
      ownership_id: {
        type: Sequelize.UUID
      },
      businessfield_id: {
        type: Sequelize.UUID
      },
      origin: {
        type: Sequelize.STRING
      },
      operation_location: {
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
    await queryInterface.dropTable('stakeholders');
  }
};