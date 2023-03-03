'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('positionpermissions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      position_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
              model: 'positions',
              key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
          },
      permission_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
              model: 'permissions',
              key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
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
    await queryInterface.dropTable('positionpermissions');
  }
};