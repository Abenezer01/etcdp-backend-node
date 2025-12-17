'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    // Add the 'is_admin_role' column to the 'Roles' table
    await queryInterface.addColumn('roles', 'is_admin_role', {
      type: DataTypes.BOOLEAN, 
      // All existing role records will default to false
      defaultValue: false
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the 'is_admin_role' column from the 'Roles' table
    await queryInterface.removeColumn('roles', 'is_admin_role');
  }
};