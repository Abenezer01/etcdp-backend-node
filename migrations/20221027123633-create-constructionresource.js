'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('constructionresources', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            parent_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'constructionresources',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            project_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'projects',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            resource_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'resources',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            used_quantity: {
                type: Sequelize.DOUBLE
            },
            unit_price: {
                type: Sequelize.DOUBLE
            },
            period_from: {
                type: Sequelize.DATE
            },
            period_until: {
                type: Sequelize.DATE
            },
            data_source: {
                type: Sequelize.TEXT
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
        await queryInterface.dropTable('constructionresources');
    }
};