'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FasteningSystemCharacteristics97Bs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      fastening_system_type: {
        type: Sequelize.STRING
      },
      manufacturer_or_supplier: {
        type: Sequelize.STRING
      },
      fastening_system_specifications: {
        type: Sequelize.TEXT
      },
      rail_clips_details: {
        type: Sequelize.TEXT
      },
      bolts_nuts_specifications: {
        type: Sequelize.TEXT
      },
      other_fastening_system_components: {
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
    await queryInterface.dropTable('FasteningSystemCharacteristics97Bs');
  }
};