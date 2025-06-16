'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RailwayTrackRehabilitationOrRenewals', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'RailwayTrackRehabilitationOrRenewals',
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
      track_renewal_history: {
        type: Sequelize.TEXT
      },
      plans_or_schedules: {
        type: Sequelize.TEXT
      },
      rehabilitation_renewal_methods_used_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      rehabilitation_renewal_types: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('RailwayTrackRehabilitationOrRenewals');
  }
};