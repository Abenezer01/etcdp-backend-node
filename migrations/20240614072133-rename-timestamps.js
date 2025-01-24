'use strict';

const { QueryInterface } = require('sequelize');

/**
 * @param {QueryInterface} queryInterface 
 * @param {import('sequelize').Sequelize} Sequelize 
 */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tables = await queryInterface.showAllTables();

    for (const table of tables) {
      const columns = await queryInterface.describeTable(table);

      // Check and rename createdAt to created_at if it exists
      if (columns.createdAt) {
        await queryInterface.renameColumn(table, 'createdAt', 'created_at');
      }

      // Check and rename updatedAt to updated_at if it exists
      if (columns.updatedAt) {
        await queryInterface.renameColumn(table, 'updatedAt', 'updated_at');
      }
    }
  },

  async down(queryInterface, Sequelize) {
    const tables = await queryInterface.showAllTables();

    for (const table of tables) {
      const columns = await queryInterface.describeTable(table);

      // Check and rename created_at back to createdAt if it exists
      if (columns.created_at) {
        await queryInterface.renameColumn(table, 'created_at', 'createdAt');
      }

      // Check and rename updated_at back to updatedAt if it exists
      if (columns.updated_at) {
        await queryInterface.renameColumn(table, 'updated_at', 'updatedAt');
      }
    }
  },
};
