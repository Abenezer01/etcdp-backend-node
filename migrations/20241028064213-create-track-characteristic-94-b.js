'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TrackCharacteristic94Bs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "Project44A1s",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      project_id: {
        type: Sequelize.STRING
      },
      track_type: {
        type: Sequelize.STRING
      },
      track_gauge: {
        type: Sequelize.STRING
      },
      track_length: {
        type: Sequelize.DOUBLE
      },
      rail_type_and_size: {
        type: Sequelize.STRING
      },
      sleeper_type: {
        type: Sequelize.STRING
      },
      sleeper_spacing: {
        type: Sequelize.DOUBLE
      },
      fastening_systems: {
        type: Sequelize.STRING
      },
      ballast_type: {
        type: Sequelize.STRING
      },
      ballast_depth: {
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
    await queryInterface.dropTable('TrackCharacteristic94Bs');
  }
};