'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DistributionLineInfrastructure74Cs', {
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
      type_of_distribution_line: {
        type: Sequelize.STRING
      },
      material_of_distribution_line: {
        type: Sequelize.STRING
      },
      conductor_size_of_distribution_line: {
        type: Sequelize.DOUBLE
      },
      voltage_level: {
        type: Sequelize.DOUBLE
      },
      topology: {
        type: Sequelize.STRING
      },
      switching_station_connection: {
        type: Sequelize.BOOLEAN
      },
      name_of_switching_station: {
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
    await queryInterface.dropTable('DistributionLineInfrastructure74Cs');
  }
};