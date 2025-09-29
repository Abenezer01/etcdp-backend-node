'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RailwayFasteningSystemCharacteristics', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      parent_id: {
        type: Sequelize.UUID,
        references: { 
          model: 'RailwayFasteningSystemCharacteristics',
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
      railway_line_section_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      used_fastening_system_type: {
        type: Sequelize.STRING
      },
      fastening_system_manufacturer_supplier: {
        type: Sequelize.STRING
      },
      fastening_system_specifications: {
        type: Sequelize.STRING
      },
      rail_clips_or_clamps_details: {
        type: Sequelize.TEXT
      },
      bolts_and_nuts_specifications: {
        type: Sequelize.TEXT
      },
      other_fastening_system: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('RailwayFasteningSystemCharacteristics');
  }
};