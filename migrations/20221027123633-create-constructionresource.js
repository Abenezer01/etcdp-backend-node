'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('constructionresources', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'constructionresources',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      resourcecategory_id: {
        type: Sequelize.UUID,
        references: {
          model: 'resourcecategories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      resourcesubcategory_id: {
        type: Sequelize.UUID,
        references: {
          model: 'resourcesubcategories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('constructionresources');
  }
};