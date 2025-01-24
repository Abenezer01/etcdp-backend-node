'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ConstructionEquipment30Bs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      
      stakeholder_id: {
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      chassis_no: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      make_year: {
        type: Sequelize.INTEGER
      },
      economical_service_time: {
        type: Sequelize.INTEGER
      },
      capacity: {
        type: Sequelize.DOUBLE
      },
      unit_price: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('ConstructionEquipment30Bs');
  }
};