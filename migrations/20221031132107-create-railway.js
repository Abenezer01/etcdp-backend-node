"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("railways", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "railways",
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
      energy_source: {
        type: Sequelize.STRING,
      },
      major_operator: {
        type: Sequelize.STRING,
      },
      system_length: {
        type: Sequelize.DOUBLE,
      },
      total_station_no: {
        type: Sequelize.INTEGER,
      },
      fright_cargo_no: {
        type: Sequelize.INTEGER,
      },
      transport_cargo_no: {
        type: Sequelize.INTEGER,
      },
      revision_no: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("railways");
  },
};
