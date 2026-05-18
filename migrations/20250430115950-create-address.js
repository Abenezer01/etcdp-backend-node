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
      country_id: {
        type: Sequelize.UUID,
        references: {
          model: "AddressMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      region_id: {
        type: Sequelize.UUID,
        references: {
          model: "AddressMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      city_id: {
        type: Sequelize.UUID,
        references: {
          model: "AddressMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      subcity_id: {
        type: Sequelize.UUID,
        references: {
          model: "AddressMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      woreda_id: {
        type: Sequelize.UUID,
        references: {
          model: "AddressMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      kebele: {
        type: Sequelize.STRING
      },
      street_id: {
        type: Sequelize.UUID,
        references: {
          model: "AddressMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
