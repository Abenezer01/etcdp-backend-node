"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE VIEW RolePermissionView AS
      SELECT 
        rp.role_id,
        p.name AS permission_name
      FROM rolepermissions rp
      JOIN permissions p
        ON rp.permission_id = p.id;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP VIEW IF EXISTS RolePermissionView;
    `);
  },
};