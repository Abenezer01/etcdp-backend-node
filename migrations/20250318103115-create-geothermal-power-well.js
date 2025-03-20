'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GeothermalPowerWells', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'GeothermalPowerWells',
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
      depth: {
        type: Sequelize.DOUBLE
      },
      well_diameter: {
        type: Sequelize.DOUBLE
      },
      drilling_period: {
        type: Sequelize.DATE
      },
      temperature_at_bottom_hole: {
        type: Sequelize.DOUBLE
      },
      wells_number: {
        type: Sequelize.INTEGER
      },
      wells_name: {
        type: Sequelize.STRING
      },
      plant_life: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('GeothermalPowerWells');
  }
};