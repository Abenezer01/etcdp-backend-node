'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransmissionLineInformation70Bs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      transmission_voltage: {
        type: Sequelize.DOUBLE
      },
      length: {
        type: Sequelize.DOUBLE
      },
      number_of_circuits: {
        type: Sequelize.STRING
      },
      starting_point_coordinates: {
        type: Sequelize.DOUBLE
      },
      ending_point_coordinates: {
        type: Sequelize.DOUBLE
      },
      life_time: {
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
    await queryInterface.dropTable('TransmissionLineInformation70Bs');
  }
};