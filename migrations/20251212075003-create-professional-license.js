'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProfessionalLicenses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "ProfessionalLicenses",
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
      license_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ResourceMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      license_category_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ResourceMasterData',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      license_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      license_scope: {
        type: Sequelize.STRING
      },
      licensing_body: {
        type: Sequelize.STRING
      },
      license_number: {
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
        type: Sequelize.TEXT,
        allowNull: false
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
    await queryInterface.dropTable('ProfessionalLicenses');
  }
};