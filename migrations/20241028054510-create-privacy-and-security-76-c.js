'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PrivacyAndSecurity76Cs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "Project44A1s",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Project44A1s",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      privacy_measures_implemented: {
        type: Sequelize.BOOLEAN
      },
      type_of_privacy_measures: {
        type: Sequelize.STRING
      },
      customer_engagement_frequency: {
        type: Sequelize.STRING
      },
      customer_engagement_programs_implemented: {
        type: Sequelize.BOOLEAN
      },
      type_of_customer_engagement_programs: {
        type: Sequelize.STRING
      },
      social_impact_assessment_conducted: {
        type: Sequelize.BOOLEAN
      },
      resettlement_and_compensation_measures_implemented: {
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
    await queryInterface.dropTable('PrivacyAndSecurity76Cs');
  }
};