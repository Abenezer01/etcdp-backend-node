'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('totalemployees', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'totalemployees',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      stakeholder_id: {
        type: Sequelize.UUID
      },
      year: {
        type: Sequelize.INTEGER
      },
      domain: {
        type: Sequelize.STRING
      },
      department_id: {
        type: Sequelize.UUID
      },
      nationality: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('totalemployees');
  }
};