'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransmissionLineInformations', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'TransmissionLineInformations',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      transmission_voltage: {
        type: Sequelize.DOUBLE
      },
      transmission_line_route_length: {
        type: Sequelize.DOUBLE
      },
      circuit_number: {
        type: Sequelize.INTEGER
      },
      starting_point_northing: {
        type: Sequelize.DOUBLE
      },
      starting_point_easting: {
        type: Sequelize.DOUBLE
      },
      ending_point_northing: {
        type: Sequelize.DOUBLE
      },
      ending_point_easting: {
        type: Sequelize.DOUBLE
      },
      lifetime: {
        type: Sequelize.INTEGER
      },
      remark: {
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
    await queryInterface.dropTable('TransmissionLineInformations');
  }
};