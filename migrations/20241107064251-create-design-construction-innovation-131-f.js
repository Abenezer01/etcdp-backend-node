'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DesignConstructionInnovation131Fs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_related_research_id: {
        type: Sequelize.UUID
      },
      digital_fabrication: {
        type: Sequelize.TEXT
      },
      additive_manufacturing: {
        type: Sequelize.TEXT
      },
      biomimicry_in_design: {
        type: Sequelize.TEXT
      },
      resilient_infrastructure: {
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
    await queryInterface.dropTable('DesignConstructionInnovation131Fs');
  }
};