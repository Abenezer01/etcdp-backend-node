'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DamOutletAndEnergyDissipationSystems', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'DamOutletAndEnergyDissipationSystems',
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
      intake_tower_top_elevation: {
        type: Sequelize.DOUBLE
      },
      outlet_diameter: {
        type: Sequelize.DOUBLE
      },
      outlet_discharge: {
        type: Sequelize.DOUBLE
      },
      trash_racks_availability: {
        type: Sequelize.BOOLEAN
      },
      energy_dissipation_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProjectMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      bottom_outlet_availability: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('DamOutletAndEnergyDissipationSystems');
  }
};