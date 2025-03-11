'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectContactPeople', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'ProjectContactPeople',
          key: 'id'
        }
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { 
          model: 'projects',
          key: 'id'
        }
      },
      stakeholder_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'stakeholders',
          key: 'id'
        }
      },
      department: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      middle_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      national_id_no: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });   
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProjectContactPeople');
  }
};