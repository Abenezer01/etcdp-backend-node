'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SleeperConditionAssessment96Cs', {
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
      inspection_date: {
        type: Sequelize.DATE
      },
      sleeper_length: {
        type: Sequelize.STRING
      },
      sleeper_condition_rating: {
        type: Sequelize.TEXT
      },
      presence_of_defects: {
        type: Sequelize.STRING
      },
      sleeper_stability_alignment: {
        type: Sequelize.STRING
      },
      number_of_sleepers_required: {
        type: Sequelize.INTEGER
      },
      supplier_name: {
        type: Sequelize.STRING
      },
      supplier_contact_info: {
        type: Sequelize.STRING
      },
      delivery_date: {
        type: Sequelize.DATE
      },
      installation_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('SleeperConditionAssessment96Cs');
  }
};