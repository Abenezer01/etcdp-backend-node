'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectDetail44A2s', {
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
      function: {
        type: Sequelize.STRING
      },
      building_height: {
        type: Sequelize.DOUBLE
      },
      building_story: {
        type: Sequelize.INTEGER
      },
      builtup_area: {
        type: Sequelize.DOUBLE
      },
      project_delivery_method: {
        type: Sequelize.STRING
      },
      project_contract_type: {
        type: Sequelize.STRING
      },
      total_house_units: {
        type: Sequelize.INTEGER
      },
      total_stuff_number: {
        type: Sequelize.INTEGER
      },
      similar_block_number: {
        type: Sequelize.INTEGER
      },
      total_functional_units: {
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
    await queryInterface.dropTable('ProjectDetail44A2s');
  }
};