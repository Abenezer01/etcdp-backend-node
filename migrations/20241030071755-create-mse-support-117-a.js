'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MSESupport117As', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      company_name: {
        type: Sequelize.STRING
      },
      contact_person: {
        type: Sequelize.STRING
      },
      contact_email: {
        type: Sequelize.STRING
      },
      contact_phone: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      financial_support: {
        type: Sequelize.TEXT
      },
      training_capacity_building: {
        type: Sequelize.TEXT
      },
      networking_business_development: {
        type: Sequelize.TEXT
      },
      access_information_resources: {
        type: Sequelize.TEXT
      },
      technology_innovation_support: {
        type: Sequelize.TEXT
      },
      quality_standards_compliance: {
        type: Sequelize.TEXT
      },
      policy_advocacy: {
        type: Sequelize.TEXT
      },
      access_international_markets: {
        type: Sequelize.TEXT
      },
      success_stories: {
        type: Sequelize.TEXT
      },
      challenges_faced: {
        type: Sequelize.TEXT
      },
      opportunities: {
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
    await queryInterface.dropTable('MSESupport117As');
  }
};