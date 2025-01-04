'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Instrumentation87D6s', {
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
      id: {
        type: Sequelize.UUID
      },
      dam_id: {
        type: Sequelize.UUID
      },
      dam_instrumentation_available: {
        type: Sequelize.BOOLEAN
      },
      gallery_available: {
        type: Sequelize.BOOLEAN
      },
      bottom_outlet_available: {
        type: Sequelize.BOOLEAN
      },
      meteorological_data_collection_available: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Instrumentation87D6s');
  }
};