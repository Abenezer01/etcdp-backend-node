"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transmissionlines", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "transmissionlines",
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
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      line_type: {
        type: Sequelize.STRING,
      },
      transmission_capacity: {
        type: Sequelize.STRING,
      },
      transmitting_power: {
        type: Sequelize.STRING,
      },
      transmitting_current: {
        type: Sequelize.STRING,
      },
      transmitting_voltage: {
        type: Sequelize.STRING,
      },
      transmission_towers_number: {
        type: Sequelize.INTEGER,
      },
      start_northing: {
        type: Sequelize.DOUBLE,
      },
      start_easting: {
        type: Sequelize.DOUBLE,
      },
      end_northing: {
        type: Sequelize.DOUBLE,
      },
      end_easting: {
        type: Sequelize.DOUBLE,
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
  async down(queryInterface, /* Sequelize */) {
    await queryInterface.dropTable("transmissionlines");
  },
};
