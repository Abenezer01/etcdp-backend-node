'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GridControlCenterInformation77As', {
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
      year_of_installation: {
        type: Sequelize.DATE
      },
      time: {
        type: Sequelize.TEXT
      },
      main_features: {
        type: Sequelize.STRING
      },
      control_system_type: {
        type: Sequelize.STRING
      },
      communication_links: {
        type: Sequelize.STRING
      },
      ems_capability: {
        type: Sequelize.BOOLEAN
      },
      remote_control_capability: {
        type: Sequelize.BOOLEAN
      },
      average_measured_data_reliability: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('GridControlCenterInformation77As');
  }
};