'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DistributionTransformerType75Bs', {
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
      transformer_type: {
        type: Sequelize.STRING
      },
      type_of_cooling: {
        type: Sequelize.STRING
      },
      transformer_power_rating: {
        type: Sequelize.DOUBLE
      },
      life_time: {
        type: Sequelize.INTEGER
      },
      protection_installed: {
        type: Sequelize.STRING
      },
      safety_problems_encountered: {
        type: Sequelize.STRING
      },
      number_of_work_accidents: {
        type: Sequelize.INTEGER
      },
      on_site_safety_regulation_measures_implemented: {
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
    await queryInterface.dropTable('DistributionTransformerType75Bs');
  }
};