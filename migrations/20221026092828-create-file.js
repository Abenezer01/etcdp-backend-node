'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('files', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            parent_id: {
                type: Sequelize.UUID
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            url: {
                type: Sequelize.TEXT
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT
            },
            extension: {
                type: Sequelize.STRING
            },
            reference_id: {
                type: Sequelize.UUID
            },
            size: {
                type: Sequelize.DOUBLE
            },
            revision_no: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('files');
    }
};