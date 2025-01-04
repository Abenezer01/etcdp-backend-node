"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("buildingdimensiondetails", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "buildingdimensiondetails",
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
      site_area: {
        type: Sequelize.DOUBLE,
      },
      site_above_sea_level: {
        type: Sequelize.DOUBLE,
      },
      ground_floor_area: {
        type: Sequelize.DOUBLE,
      },
      total_floor_area: {
        type: Sequelize.DOUBLE,
      },
      basement_stories_no: {
        type: Sequelize.INTEGER,
      },
      above_ground_floor_stories_no: {
        type: Sequelize.INTEGER,
      },
      height_above_natural_ground: {
        type: Sequelize.DOUBLE,
      },
      depth_below_natural_ground: {
        type: Sequelize.DOUBLE,
      },
      file_id: {
        type: Sequelize.UUID,
        references: {
          model: "files",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      remark: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("buildingdimensiondetails");
  },
};
