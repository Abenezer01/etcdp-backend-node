'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hydroelectricdams', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'hydroelectricdams',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      river_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      elevation_from_sea_level: {
        type: Sequelize.STRING
      },
      elevation_from_ngl: {
        type: Sequelize.STRING
      },
      dam_type: {
        type: Sequelize.STRING
      },
      dam_volume: {
        type: Sequelize.STRING
      },
      gated_spillway_no: {
        type: Sequelize.INTEGER
      },
      none_gated_spillway_no: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('hydroelectricdams');
  }
};