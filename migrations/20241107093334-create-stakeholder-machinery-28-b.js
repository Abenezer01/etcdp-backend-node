'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StakeholderMachinery28Bs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      
      stakeholder_id: {
        type: Sequelize.UUID
      },
      equipment_type: {
        type: Sequelize.STRING
      },
      plate_no: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      year_make: {
        type: Sequelize.INTEGER
      },
      chassis_no: {
        type: Sequelize.STRING
      },
      engine_no: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.STRING
      },
      purpose: {
        type: Sequelize.STRING
      },
      current_situation: {
        type: Sequelize.STRING
      },
      location: {
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
    await queryInterface.dropTable('StakeholderMachinery28Bs');
  }
};