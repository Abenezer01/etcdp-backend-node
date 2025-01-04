"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("addresses", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "addresses",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      model_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      region: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subcity: {
        type: Sequelize.STRING,
      },
      street: {
        type: Sequelize.STRING,
      },
      block_number: {
        type: Sequelize.STRING,
      },
      house_number: {
        type: Sequelize.STRING,
      },
      hq: {
        type: Sequelize.BOOLEAN,
      },

      northing: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      easting: {
        type: Sequelize.DOUBLE,
        allowNull: false,
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
    await queryInterface.dropTable("addresses");
  },
};
