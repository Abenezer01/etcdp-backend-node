'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Add the 'is_admin' column to the 'Users' table
    await queryInterface.addColumn('users', 'is_admin', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    // Remove the 'is_admin' column from the 'Users' table
    await queryInterface.removeColumn('users', 'is_admin');
  }
};
