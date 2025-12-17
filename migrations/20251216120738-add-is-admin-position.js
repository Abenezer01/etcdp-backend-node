'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    // Add the 'is_admin_position' column to the 'Positions' table
    await queryInterface.addColumn('positions', 'is_admin_position', {
      type: DataTypes.BOOLEAN,
      // All existing position records will default to false
      defaultValue: false
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the 'is_admin_position' column from the 'Positions' table
    await queryInterface.removeColumn('positions', 'is_admin_position');
  }
};