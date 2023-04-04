module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      parent_id: {
        type: Sequelize.UUID,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      middle_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      // email: {
      //     type: Sequelize.STRING,
      //     unique: true,
      //     allowNull: false
      // },
      password: {
        type: Sequelize.STRING,
      },
      // phone: {
      //     type: Sequelize.STRING,
      //     allowNull: false,
      //     unique: true
      // },
      gender: Sequelize.STRING,
      marital_status: Sequelize.BOOLEAN,
      partner_name: Sequelize.STRING,
      birth_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      // position_id: {
      //     type: Sequelize.UUID,
      //     allowNull: false,
      //     references: {
      //         model: 'positions',
      //         key: 'id'
      //     },
      //     onUpdate: 'CASCADE',
      //     onDelete: 'CASCADE',
      // },
      refresh_token: Sequelize.TEXT,
      revision_no: Sequelize.INTEGER,
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
    await queryInterface.dropTable("users");
  },
};
