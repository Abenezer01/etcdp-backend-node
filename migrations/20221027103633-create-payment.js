'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('payments', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            parent_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'payments',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            project_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'projects',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            type: Sequelize.STRING,
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: Sequelize.TEXT,
            amount: {
                type: Sequelize.DOUBLE
            },
            retention: {
                type: Sequelize.DOUBLE
            },
            reference_number: {
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
        await queryInterface.dropTable('payments');
    }
};