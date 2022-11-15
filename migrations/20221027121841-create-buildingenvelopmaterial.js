'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buildingenvelopmaterials', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'buildingenvelopmaterials',
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
      exterior_wall: {
        type: Sequelize.STRING
      },
      roof_assembly: {
        type: Sequelize.STRING
      },
      exterior_windows: {
        type: Sequelize.STRING
      },
      exterior_walls: {
        type: Sequelize.STRING
      },
      shading_components: {
        type: Sequelize.STRING
      },
      remark: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('buildingenvelopmaterials');
  }
};