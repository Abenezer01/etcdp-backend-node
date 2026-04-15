'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('ProjectMasterData', 'project_type_id', {
      type: Sequelize.UUID,
      allowNull: true, // ✅ now optional
      references: {
        model: 'projecttypes',
        key: 'id'
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('ProjectMasterData', 'project_type_id', {
      type: Sequelize.UUID,
      allowNull: false, // revert back
      references: {
        model: 'projecttypes',
        key: 'id'
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  }
};
