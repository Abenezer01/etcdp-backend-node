'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roadinfos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'roadinfos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      project_id: {
        type: Sequelize.UUID,
        references: {
          model: 'projects',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      material: {
        type: Sequelize.STRING
      },
      location_function: {
        type: Sequelize.TEXT
      },
      traffic_volume: {
        type: Sequelize.DOUBLE
      },
      traffic_type: {
        type: Sequelize.STRING
      },
      economy: {
        type: Sequelize.STRING
      },
      rigidity: {
        type: Sequelize.STRING
      },
      topography: {
        type: Sequelize.STRING
      },
      revision_no: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('roadinfos');
  }
};