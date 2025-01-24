'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransformerType75Bs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      distributiontransformer_id: {
        type: Sequelize.STRING
      },
      transformer_type: {
        type: Sequelize.STRING
      },
      type_of_cooling: {
        type: Sequelize.STRING
      },
      transformer_power_rating: {
        type: Sequelize.DOUBLE
      },
      lifetime: {
        type: Sequelize.INTEGER
      },
      protection_installed: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('TransformerType75Bs');
  }
};