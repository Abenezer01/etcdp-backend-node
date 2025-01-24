'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BridgeType81Cs', {
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
      length: {
        type: Sequelize.DOUBLE
      },
      height: {
        type: Sequelize.DOUBLE
      },
      width: {
        type: Sequelize.DOUBLE
      },
      current_condition: {
        type: Sequelize.STRING
      },
      weight_limit: {
        type: Sequelize.DOUBLE
      },
      design_lifespan: {
        type: Sequelize.INTEGER
      },
      inspection_frequency: {
        type: Sequelize.INTEGER
      },
      percent_completed: {
        type: Sequelize.DOUBLE
      },
      year_of_construction: {
        type: Sequelize.INTEGER
      },
      maintenance_record: {
        type: Sequelize.STRING
      },
      photograph: {
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
    await queryInterface.dropTable('BridgeType81Cs');
  }
};