'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BridgeAreaData', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'BridgeAreaData',
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
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bridge_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      river_width: {
        type: Sequelize.DOUBLE
      },
      highest_water_level: {
        type: Sequelize.DOUBLE
      },
      lowest_water_level: {
        type: Sequelize.DOUBLE
      },
      area_topography_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'AreaTopographies',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      detour_possibility: {
        type: Sequelize.BOOLEAN
      },
      road_alignment: {
        type: Sequelize.STRING
      },
      altitude: {
        type: Sequelize.DOUBLE
      },
      load_limit_sign: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('BridgeAreaData');
  }
};