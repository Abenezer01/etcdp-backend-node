'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('resourcequantities', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            parent_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'resourcequantities',
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
            resourcebrand_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'resourcebrands',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            detailresourcetype_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'detailresourcetypes',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            datasource: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('resourcequantities');
    }
};