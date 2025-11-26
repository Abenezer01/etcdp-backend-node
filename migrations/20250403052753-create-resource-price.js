'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ResourcePrices', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "ResourcePrices",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      department_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "departments",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      resource_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Resources",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      resource_brand_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "ResourceBrands",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      resource_specification_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "ResourceSpecifications",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      unit_price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      total_quantity_available: {
        type: Sequelize.INTEGER
      },
      price_date: {
        type: Sequelize.DATE
      },
      supplier_name_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "ResourceMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      supplier_address_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "ResourceMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      quality_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "ResourceMasterData",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      remark: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ResourcePrices');
  }
};