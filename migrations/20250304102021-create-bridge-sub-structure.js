'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BridgeSubStructures', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'BridgeSubStructures',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      bridge_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'BridgeBasicData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      abutment_a1_height: {
        type: Sequelize.DOUBLE
      },
      abutment_a1_width: {
        type: Sequelize.DOUBLE
      },
      abutment_a2_height: {
        type: Sequelize.DOUBLE
      },
      abutment_a2_width: {
        type: Sequelize.DOUBLE
      },
      wing_wall_length: {
        type: Sequelize.DOUBLE
      },
      pier_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      piers_number: {
        type: Sequelize.INTEGER
      },
      piers_dimension: {
        type: Sequelize.STRING
      },
      pier1_height: {
        type: Sequelize.DOUBLE
      },
      pier1_width: {
        type: Sequelize.DOUBLE
      },
      pier2_height: {
        type: Sequelize.DOUBLE
      },
      pier2_width: {
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
    await queryInterface.dropTable('BridgeSubStructures');
  }
};