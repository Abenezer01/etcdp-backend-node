'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SmartMeterInformation76As', {
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
      manufacturer: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      smart_meter_type: {
        type: Sequelize.STRING
      },
      year_of_installation: {
        type: Sequelize.DATE
      },
      number_of_smart_meters_installed: {
        type: Sequelize.INTEGER
      },
      kwh_kvarh_rating: {
        type: Sequelize.DOUBLE
      },
      phase_type: {
        type: Sequelize.STRING
      },
      maximum_current_rating: {
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
    await queryInterface.dropTable('SmartMeterInformation76As');
  }
};