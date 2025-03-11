'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProfessionalCertifications', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "ProfessionalCertifications",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      professional_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Professionals",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      certification_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      certificate_title: {
        type: Sequelize.STRING
      },
      certification_scope: {
        type: Sequelize.STRING,
        allowNull: false
      },
      certifying_body: {
        type: Sequelize.STRING,
        allowNull: false
      },
      certification_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      issue_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      expire_date: {
        type: Sequelize.DATE,
        allowNull: false
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
    await queryInterface.dropTable('ProfessionalCertifications');
  }
};