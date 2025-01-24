'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CulvertRoad78C1s', {
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
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      culvert_diameter: {
        type: Sequelize.DOUBLE
      },
      culvert_length: {
        type: Sequelize.DOUBLE
      },
      culvert_height: {
        type: Sequelize.DOUBLE
      },
      material: {
        type: Sequelize.STRING
      },
      condition: {
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
    await queryInterface.dropTable('CulvertRoad78C1s');
  }
};