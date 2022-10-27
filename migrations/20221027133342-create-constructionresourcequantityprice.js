'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('constructionresourcequantityprices', {
      d: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'constructionresourcequantityprices',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      type: {
        type: Sequelize.STRING
      },
      resourcecategory_id: {
        type: Sequelize.UUID
      },
      resourcesubcategory_id: {
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      item_specification: {
        type: Sequelize.STRING
      },
      measurement_unit: {
        type: Sequelize.STRING
      },
      stock_quantity: {
        type: Sequelize.INTEGER
      },
      unit_price: {
        type: Sequelize.DOUBLE
      },
      data_source_id: {
        type: Sequelize.UUID
      },
      description: {
        type: Sequelize.TEXT
      },
      source_address: {
        type: Sequelize.STRING
      },
      revision_no: {
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
    await queryInterface.dropTable('constructionresourcequantityprices');
  }
};