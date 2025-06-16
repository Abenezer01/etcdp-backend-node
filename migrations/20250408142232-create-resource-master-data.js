'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ResourceMasterData', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'ResourceMasterData',
          key: 'id'
        }
      },
      resource_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'resourcetypes',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('ResourceMasterData');
  }
};