'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('stakeholderservices', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            parent_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'stakeholderservices',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            stakeholder_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'stakeholders', //stakeholder registered as higher institute type
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            construction_related_service_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'constructionrelatedservices', //stakeholder registered as higher institute type
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            unit_price: {
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
        await queryInterface.dropTable('stakeholderservices');
    }
};