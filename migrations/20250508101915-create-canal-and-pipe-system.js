'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CanalAndPipeSystems', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'CanalAndPipeSystems',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      general_dam_information_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'GeneralDamInformations',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      canal_name: {
        type: Sequelize.STRING
      },
      main_canal_length: {
        type: Sequelize.DOUBLE
      },
      idle_canal_length: {
        type: Sequelize.DOUBLE
      },
      secondary_canal_length: {
        type: Sequelize.DOUBLE
      },
      tertiary_canal_length: {
        type: Sequelize.DOUBLE
      },
      pressurized_system_mainline_pipe_diameter: {
        type: Sequelize.DOUBLE
      },
      main_pipe_line_length: {
        type: Sequelize.DOUBLE
      },
      total_lateral_pipe_length: {
        type: Sequelize.DOUBLE
      },
      main_canal_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      remark: {
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
    await queryInterface.dropTable('CanalAndPipeSystems');
  }
};