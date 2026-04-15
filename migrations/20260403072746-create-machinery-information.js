'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MachineryInformations', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      department_id: {
        type: Sequelize.UUID
      },
      type: {
        type: Sequelize.STRING
      },
      plate_no: {
        type: Sequelize.STRING
      },
      owner_name: {
        type: Sequelize.STRING
      },
      engine_no: {
        type: Sequelize.STRING
      },
      serial_no: {
        type: Sequelize.STRING
      },
      title_certificate_no: {
        type: Sequelize.STRING
      },
      registration_date: {
        type: Sequelize.STRING
      },
      make: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.STRING
      },
      engine_power_hp: {
        type: Sequelize.STRING
      },
      manufacture_year: {
        type: Sequelize.STRING
      },
      file_no: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      woreda: {
        type: Sequelize.STRING
      },
      kebele: {
        type: Sequelize.STRING
      },
      po_box: {
        type: Sequelize.STRING
      },
      tell: {
        type: Sequelize.STRING
      },
      ts_no: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      duty: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.STRING
      },
      remark: {
        type: Sequelize.TEXT
      },
      edesate: {
        type: Sequelize.STRING
      },
      eged: {
        type: Sequelize.STRING
      },
      eged_d: {
        type: Sequelize.STRING
      },
      eged_n: {
        type: Sequelize.STRING
      },
      bir_amount: {
        type: Sequelize.STRING
      },
      bank_b: {
        type: Sequelize.STRING
      },
      tin_number: {
        type: Sequelize.STRING
      },
      field1: {
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
    await queryInterface.dropTable('MachineryInformations');
  }
};