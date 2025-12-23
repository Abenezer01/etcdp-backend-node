'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const tables = ['Vehicles', 'SafetyEquipments', 'StakeholderMachineries'];

    for (const table of tables) {
      const tableInfo = await queryInterface.describeTable(table);

      // 1. Add Latitude if missing
      if (!tableInfo.latitude) {
        await queryInterface.addColumn(table, 'latitude', { type: Sequelize.DOUBLE, allowNull: true });
      }

      // 2. Add Longitude if missing
      if (!tableInfo.longitude) {
        await queryInterface.addColumn(table, 'longitude', { type: Sequelize.DOUBLE, allowNull: true });
      }

      // 3. Remove location if it exists
      if (tableInfo.location) {
        await queryInterface.removeColumn(table, 'location');
      }
    }

  },

  async down(queryInterface, Sequelize) {
    // Standard rollback logic if needed
  }
};