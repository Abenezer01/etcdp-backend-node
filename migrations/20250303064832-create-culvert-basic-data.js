'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CulvertBasicData', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'CulvertBasicData',
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
      culvert_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      culvert_number: {
        type: Sequelize.INTEGER
      },
      culvert_coordinate_x: {
        type: Sequelize.DOUBLE
      },
      culvert_coordinate_y: {
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
      highest_water_level: {
        type: Sequelize.DOUBLE
      },
      lowest_water_level: {
        type: Sequelize.DOUBLE
      },
      construction_year: {
        type: Sequelize.INTEGER
      },
      contractor: {
        type: Sequelize.STRING
      },
      designer: {
        type: Sequelize.STRING
      },
      culvert_cost: {
        type: Sequelize.DOUBLE
      },
      detour_possibility: {
        type: Sequelize.BOOLEAN
      },
      road_allignment: {
        type: Sequelize.STRING
      },
      altitude: {
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
    await queryInterface.dropTable('CulvertBasicData');
  }
};